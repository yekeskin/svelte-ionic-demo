import { EventEmitter } from "../utilities/event-emitter";
import convert from "../utilities/regexparam";

export interface Route {
  path: string;
  fn: any;
  redirect?: string;
}

interface RouteCallback {
  keys: string[];
  pattern: RegExp;
  fn: any; 
  stack: string;
  redirect?: string;
}

export interface StackRoute {
  component: any;
  hostElement: HTMLElement;
  unbindEvents: any;
  url: string;
  stack: string;
}

export interface Stack {
  name: string;
  routes: StackRoute[];
  parentRoute?: StackRoute;
}

class Router {
  private routeCallbacks: RouteCallback[] = [];
  private unlisten;
  private rgx: RegExp;
  rootEvent = new EventEmitter();
  base = "/";
  queryParamEnabled = false;

  direction: string | undefined = "forward";
  waitPromise!: Promise<void>;
  skipTransition = false;
  runningTask!: Promise<void> | null;

  
  private stackRoutes: { [key: string]: Stack } = {
    "main-router": { name: "main-router", routes: [] }
  };

  constructor(base: string, enableQueryParam = false) {
    base = "/" + (base || "").replace(/^\/|\/$/g, "");

    this.rgx = base === "/" ? /^\/+/ : new RegExp("^\\" + base + "(?=\\/|$)\\/?", "i");
    this.base = base;
    this.queryParamEnabled = enableQueryParam;
  }

  init(routes: Route[], rootUrl: string) {
    this.direction = "forward";
    this.stackRoutes["main-router"].routes = [];
    this.routeCallbacks = [];
    if (this.unlisten) {
      this.unlisten();
    }
    this.base = rootUrl;
    routes.forEach(route => {
      this.registerRouteCallback(route.path, route.fn, "main-router", route.redirect);
    });
    this.listen();
  }

  initStack(stackName: string, routes: Route[], parentRoute?: StackRoute) {
    this.stackRoutes[stackName] = { name: stackName, routes: [], parentRoute };
    routes.forEach(route => {
      this.registerRouteCallback(route.path, route.fn, stackName, route.redirect);
    });

    const urlState = this.getUrlState(location.pathname);
    this.syncState(location.pathname, urlState);
  }

  removeStack(stackName: string) {
    for(let i = this.routeCallbacks.length - 1; i >= 0; i -= 1) {
      if(this.routeCallbacks[i].stack == stackName) {
        this.routeCallbacks.splice(i,1);
      }
    }
    delete this.stackRoutes[stackName];
  }

  getStack(stackName: string): Stack {
    return this.stackRoutes[stackName];
  }

  url(stackName: string): string {
    return this.stackRoutes[stackName]?.routes[this.stackRoutes[stackName].routes.length - 1]?.url;
  }

  deepestRoute(prefix: string): string {
    let result = prefix;
    for(const stack in this.stackRoutes) {
      const lastUrl = this.url(stack);
      if(lastUrl && lastUrl.startsWith(prefix) && lastUrl.length > result.length) {
        result = lastUrl;
      }
    }

    return result;
  }

  push(url: string, animated?: boolean, direction?: string) {
    if (animated === false) {
      this.skipTransition = true;
    }
    this.direction = direction || "forward";
    this.route(url, false);
  }

  pop(stackName: string, animated?: boolean) {
    if (this.stackRoutes[stackName].routes.length > 1) {
      if (animated === false) {
        this.skipTransition = true;
      }
      this.direction = "back";
      const url = this.stackRoutes[stackName].routes[this.stackRoutes[stackName].routes.length - 2].url;
      this.route(url, false);
    }
  }

  popToRoot(stackName: string, animated?: boolean) {
    for(let i = 0; i < this.stackRoutes[stackName].routes.length; i += 1) {
      this.pop(stackName, animated);
    }
  }

  setRoot(rootUrl: string) {
    this.rootEvent.emit(rootUrl);
  }

  canGoBack(stackName: string, deep: number): boolean {
    if (this.stackRoutes[stackName]) {
      return this.stackRoutes[stackName].routes.length > deep;
    }
    console.log("cannot find stack: " + stackName);
    return false;
  }

  guessDirection(stackName: string, url: string): void {
    const _routes = this.stackRoutes[stackName ? stackName : "main-router"].routes;
    this.direction = _routes.length > 1 && _routes[_routes.length - 2].url === url ? "back" : "forward";
  }

  findRouteByUrl(stackName: string, url: string) {
    const routes = this.stackRoutes[stackName].routes;
    if(routes) {
      for(const route of routes) {
        if (route.url == url) {
          return route;
        }
      }
    }
  }

  pushToHistory(stack, route) {
    const index = this.stackRoutes[stack].routes.indexOf(route);
    if(index > -1) {
      this.stackRoutes[stack].routes.splice(index, 1);
    }
    this.stackRoutes[stack].routes.push(route);
  }

  popHistory(stack) {
    this.stackRoutes[stack].routes.pop();
  }

  insertToHistory(stack, route, index) {
    this.stackRoutes[stack].routes.splice(index, 0, route);
  }

  cleanup(): void {
    this.direction = undefined;
  }

  findCommonAncestorStack(stack1?: Stack, stack2?: Stack) {
    if(!stack1 || !stack2) {
      return;
    }
    const stack1Ancestors: string[] = [];
    stack1Ancestors.push(stack1.name);
    while(stack1.parentRoute) {
      stack1Ancestors.push(stack1.parentRoute.stack);
      stack1 = this.getStack(stack1.parentRoute.stack);
    }
    if(stack1Ancestors.indexOf(stack2.name) > -1) {
      return stack2;
    }
    while(stack2.parentRoute) {
      if(stack1Ancestors.indexOf(stack2.parentRoute.stack) > -1) {
        return this.getStack(stack2.parentRoute.stack);
      }
      stack2 = this.getStack(stack2.parentRoute.stack);
    }
  }

  findAncestorInStack(stack: Stack, route: StackRoute) {
    let currentStack = this.getStack(route.stack);
    if(route.stack == stack.name) {
      return route;
    }
    while(currentStack.parentRoute) {
      const parentRoute = currentStack.parentRoute;
      currentStack = this.getStack(currentStack.parentRoute.stack);
      if(currentStack.name == stack.name) {
        return parentRoute;
      }
    }
  }

  async lock(): Promise<() => void> {
    if (this.waitPromise) {
      await this.waitPromise;
    }
    let resolve!: () => void;
    this.waitPromise = new Promise(r => (resolve = r));

    return resolve;
  }

  async wait(task: () => Promise<any>) {
    if (this.runningTask) {
      await this.runningTask;
      this.runningTask = null;
    }
    const promise = (this.runningTask = task());
    return promise;
  }

  private getUrlState(uri) {
    const state = {};
    for(const stack in this.stackRoutes) {
      this.getStackUrlState(uri, stack, state);
    }

    return state;
  }

  private stateToSearchParam(state) {
    const searchParam = new URLSearchParams();
    let stateArr: string[] = [];

    for(const stack in state) {
      stateArr.push(stack + ":" + state[stack]);
    }
    if(stateArr.length > 0) {
      searchParam.set("state", btoa(stateArr.join(";")));
    }

    return searchParam;
  }

  private searchParamToState(searchParam) {
    const state = {};
    if(searchParam) {
      const parsed = new URLSearchParams(searchParam).get("state");
      if(parsed) {
        var searchParamStateStr = atob(parsed);
        var searchParamOutletArr = searchParamStateStr.split(";");
        for(const searchParamOutlet of searchParamOutletArr) {
          const [outlet, outletUrl] = searchParamOutlet.split(":");
          state[outlet] = outletUrl;
        }
      }
    }

    return state;
  }

  private getStackUrlState(uri, stackName, state = {}) {    
    if ((uri = this.formatUri(uri || location.pathname))) {
      uri = uri.match(/[^\?#]*/)[0];

      for(let i = 0; i < this.routeCallbacks.length; i += 1) {
        const routeCallback = this.routeCallbacks[i];
        if (stackName == routeCallback.stack && routeCallback.pattern.exec(uri)) {
          state[stackName] = uri;
          break;
        }
      }
      
      // no match
      if(!state[stackName] && uri.lastIndexOf("/") > 0) {
        this.getStackUrlState(uri.substring(0, uri.lastIndexOf("/")), stackName, state);
      }

      return state;
    }
  }

  private getRouterState() {
    const state = {};
    for(const stack in this.stackRoutes) {
      state[stack] = this.stackRoutes[stack].routes[this.stackRoutes[stack].routes.length - 1]?.url;
    }

    return state;
  }

  private getOutlets(state?) {
    if(!state) {
      state = this.stackRoutes;
    }
    const result: string[] = [];
    for(const stackName in state) {
      result.push(stackName);
    }

    return result;
  }

  private isEqual(array1, array2) {
    if(array1.length != array2.length) {
      return false;
    }
    for(const el of array1) {
      if(array2.indexOf(el) == -1) {
        return false;
      }
    }
    return true;
  }

  private registerRouteCallback(path: string, fn, stack, redirect?) {
    const regexParam = convert(path);
    this.routeCallbacks.push({ ...regexParam, fn, stack, redirect });
  }

  private route(uri, replace: boolean) {
    if (uri[0] === "/" && !this.rgx.test(uri)) {
      uri = this.base + uri;
    }

    const routerState = this.getRouterState();
    const urlState = this.getUrlState(uri);

    const diffState = {};
    for(const outlet in routerState) {
      if(!urlState[outlet]) {
        diffState[outlet] = routerState[outlet];
      }
    }

    for(const state in urlState) {
      if(!routerState[state] || routerState[state] != urlState[state]) {
        routerState[state] = urlState[state];
      }
    }

    if(this.queryParamEnabled) {
      const stateSearchParam = this.stateToSearchParam(diffState).toString();
      if(stateSearchParam.length > 0) {
        uri += "?" + stateSearchParam;
      }
    }

    history[(replace ? "replace" : "push") + "State"](routerState, null, uri);
  }

  private async onRoute(uri, stackName) {
    let i = 0;
    const params = {};
    let arr;
    let obj;
    
    if ((uri = this.formatUri(uri || location.pathname))) {
      uri = uri.match(/[^\?#]*/)[0];
      for (; i < this.routeCallbacks.length; i++) {
        if(stackName && stackName != this.routeCallbacks[i].stack) {
          continue;
        }
        if ((arr = (obj = this.routeCallbacks[i]).pattern.exec(uri))) {
          if(obj.redirect) {
            this.route(obj.redirect, true);
            return;
          }
          for (i = 0; i < obj.keys.length; ) {
            params[obj.keys[i]] = arr[++i] || null;
          }
          await obj.fn({params, uri});
          return;
        }
      }
      
      // no match
      /*if(uri.lastIndexOf("/") > 0) {
        this.onRoute(uri.substring(0, uri.lastIndexOf("/")), stackName);
      }*/
    }
  }

  private async syncState(uri, newState, tries = 0) {
    newState = newState ? newState : this.getUrlState(uri);
    const currentState = this.getRouterState();

    const availableOutlets = this.getOutlets(currentState); 
    const newOutlets = this.getOutlets(newState);

    for(const outlet in currentState) {
      if(newState[outlet] && currentState[outlet] != newState[outlet]) {
        await this.onRoute(newState[outlet], outlet);
      }
    }

    if (!this.isEqual(availableOutlets, newOutlets) && tries < 32) {
      return this.syncState(uri, newState, tries + 1);
    } else if (!this.isEqual(availableOutlets, newOutlets) && tries >= 32) {
      for(const outlet in currentState) {
        if(!newState[outlet]) {
          this.removeStack(outlet);
        }
      }
    }
  }

  private async listen() {
    wrap("push");
    wrap("replace");

    const run = e => {
      if(e.type == "popstate") {
        this.syncState(location.pathname, e.state);
      } else {
        this.syncState(location.pathname, e.uri);
      }
    };

    addEventListener("popstate", run);
    addEventListener("replacestate", run);
    addEventListener("pushstate", run);

    this.unlisten = () => {
      removeEventListener("popstate", run);
      removeEventListener("replacestate", run);
      removeEventListener("pushstate", run);
    };

    this.syncState(this.base, this.getUrlState(location.pathname));
  }

  private formatUri(uri) {
    if (!uri) {
      return uri;
    }
    uri = "/" + uri.replace(/^\/|\/$/g, "");
    return this.rgx.test(uri) && uri.replace(this.rgx, "/");
  }
}

function wrap(type, fn?) {
  if (history[type]) {
    return;
  }
  history[type] = type;
  fn = history[(type += "State")];
  history[type] = function(uri) {
    const ev = new Event(type.toLowerCase()) as any;
    ev.uri = uri;
    fn.apply(this, arguments);
    return dispatchEvent(ev);
  };
}

export const router = new Router('/');
