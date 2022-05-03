<script lang="ts" context="module">
  declare var Ionic: any;

  export type RouteEvent = {
    id: string;
    url: string;
    prev_url?: string;
  };
</script>

<script lang="ts">
  import { onDestroy, onMount, tick } from "svelte";
  import { Route, router } from "../providers/router";
  import type { StackRoute } from "../providers/router";
  import { bindLifecycleEvents } from "../providers/ionic/svelte-delegate";

  export let id = "main-router";
  export let routes;
  export let root;
  export let onRouteChange: (ev: RouteEvent) => void;

  export let stack = true;
  let activeTab: StackRoute;

  let routerOutlet;

  const draw = async (m: any, obj?: any) => {
    const _routes = router.getStack(id).routes;
    const unlock = await router.lock();
    let enteringView: StackRoute | undefined;
    let leavingView: StackRoute | undefined = _routes[_routes.length - 1];

    let animationDirection = router.direction;
    if (router.direction === undefined) {
      router.guessDirection(id, obj.uri);
    }

    if (!stack) {
      router.skipTransition = true;
      if (activeTab) {
        leavingView = activeTab;
      }
      enteringView = router.findRouteByUrl(id, obj.uri);
      if (enteringView) {
        enteringView.hostElement.classList.remove("ion-page-hidden");
      } else {
        const params = obj.params || {};
        enteringView = attachView(m, obj.uri, params);
      }
      router.pushToHistory(id, enteringView);
      activeTab = enteringView;
    } else if (router.direction === "back") {
      enteringView = _routes[_routes.length - 2];
      if (!enteringView) {
        const params = obj.params || {};
        enteringView = attachView(m, obj.uri, params);
        router.insertToHistory(id, enteringView, _routes.length - 2);
      }
    } else {
      const params = obj.params || {};
      enteringView = attachView(m, obj.uri, params);
      router.pushToHistory(id, enteringView);
    }

    // console.log(id, router.direction, leavingView, enteringView, _routes, animationDirection);

    if (enteringView?.url != leavingView?.url) {
      const enteringEl = enteringView ? enteringView.hostElement : undefined;
      const leavingEl = leavingView ? leavingView.hostElement : undefined;
      const showGoBack =
        (router.direction === "forward" && _routes.length > 1) || (router.direction === "back" && _routes.length > 2);
      const outlet = enteringView?.stack == id ? routerOutlet : document.querySelector("ion-router-outlet#" + enteringView?.stack);
      await transition(animationDirection, showGoBack, false, enteringEl, leavingEl, outlet);
      if ((router.direction === "forward" || !stack) && leavingEl) {
        leavingEl.classList.add("ion-page-hidden");
      } else if (router.direction === "back") {
        router.popHistory(id);
        if (leavingView) {
          removeView(leavingView);
        }
      }
    }
    unlock();
    router.cleanup();

    if (onRouteChange) {
      onRouteChange({
        id: id,
        url: enteringView?.url,
        prev_url: leavingView?.url,
      } as RouteEvent);
    }
  };

  const transition = (
    direction: string | undefined,
    showGoBack: boolean,
    progressAnimation: boolean,
    enteringEl?: HTMLElement | null,
    leavingEl?: HTMLElement,
    _routerOutlet?: HTMLIonRouterOutletElement
  ): Promise<boolean> => {
    if (router.skipTransition) {
      router.skipTransition = false;
      return Promise.resolve(false);
    }
    if (leavingEl === enteringEl) {
      return Promise.resolve(false);
    }
    if (!_routerOutlet) {
      _routerOutlet = routerOutlet;
    }
    if (_routerOutlet && enteringEl && enteringEl !== leavingEl) {
      enteringEl.classList.add("ion-page-invisible");
      if (enteringEl.parentElement !== _routerOutlet) {
        _routerOutlet.appendChild(enteringEl);
      }

      if (_routerOutlet.commit) {
        return _routerOutlet.commit(enteringEl, leavingEl, {
          deepWait: true,
          duration: direction === undefined ? 0 : undefined,
          direction,
          showGoBack,
          progressAnimation,
        });
      }
    }
    return Promise.resolve(false);
  };

  const startBackTransition = () => {
    const _routes = router.getStack(id).routes;
    const leavingView = _routes[routes.length - 1];
    if (leavingView) {
      const enteringView = _routes[_routes.length - 2];
      return router.wait(() => {
        return transition("back", router.canGoBack(id, 2), true, enteringView.hostElement, leavingView.hostElement);
      });
    }
    return Promise.resolve();
  };

  const endBackTransition = (shouldComplete: boolean) => {
    if (shouldComplete) {
      router.skipTransition = true;
      router.pop(id);
    }
  };

  const attachView = (component: any, url, props?: object): StackRoute => {
    const hostElement = document.createElement("div");
    const componentRef = new component({
      target: hostElement,
      props,
    });
    hostElement.classList.add("ion-page");
    routerOutlet.appendChild(hostElement);
    const unbindEvents = bindLifecycleEvents(componentRef, hostElement);

    return { component: componentRef, hostElement, unbindEvents, url: url || location.pathname, stack: id };
  };

  const removeView = (view: StackRoute): void => {
    view.component.$destroy();
    view.unbindEvents();
    view.hostElement.remove();
  };

  onMount(async () => {
    routerOutlet.swipeHandler =
      Ionic && Ionic.mode === "ios"
        ? {
            canStart: () => router.canGoBack(id, 1),
            onStart: () => startBackTransition(),
            onEnd: (shouldContinue: boolean) => endBackTransition(shouldContinue),
          }
        : undefined;
    const _routes: Route[] = [];
    for (const route of routes) {
      _routes.push({
        path: route.path,
        fn: async (obj) => await route.fn(draw, obj),
        redirect: route.redirect,
      });
    }
    if (id == "main-router") {
      router.init(_routes, location.pathname);
      router.rootEvent.subscribe((rootUrl) => {
        const _routes: Route[] = [];
        for (const route of routes) {
          _routes.push({
            path: route.path,
            fn: async (obj) => await route.fn(draw, obj),
            redirect: route.redirect,
          });
        }

        const stack = router.getStack(id).routes;
        for (const view of stack) {
          removeView(view);
        }
        router.init(_routes, rootUrl);
      });
    } else {
      await tick();
      const parentRouter = routerOutlet.parentNode.closest("ion-router-outlet");
      const parentRoute = parentRouter ? router.findRouteByUrl(parentRouter.id, root) : undefined;
      router.initStack(id, _routes, parentRoute);
    }
  });

  onDestroy(() => {
    router.removeStack(id);
  });
</script>

<ion-router-outlet bind:this={routerOutlet} {id} />
