import {
  FrameworkDelegate,
  LIFECYCLE_DID_ENTER,
  LIFECYCLE_DID_LEAVE,
  LIFECYCLE_WILL_ENTER,
  LIFECYCLE_WILL_LEAVE,
  LIFECYCLE_WILL_UNLOAD
} from "@ionic/core";

class SvelteDelegate implements FrameworkDelegate {
  private elRefMap = new WeakMap<HTMLElement, any>();
  private elEventsMap = new WeakMap<HTMLElement, () => void>();

  attachViewToDom(parentElement: HTMLElement, component: any, props?: object, classes?: string[]): Promise<HTMLElement> {
    const hostElement = document.createElement("div");
    const componentRef = new component({
      target: hostElement,
      props
    });
    if (classes) {
      for (const cls of classes) {
        hostElement.classList.add(cls);
      }
    }
    parentElement.appendChild(hostElement);
    const unbindEvents = bindLifecycleEvents(componentRef, hostElement);
    this.elRefMap.set(hostElement, componentRef);
    this.elEventsMap.set(hostElement, unbindEvents);

    return Promise.resolve(hostElement);
  }

  removeViewFromDom(parentElement: HTMLElement, hostElement: HTMLElement): Promise<void> {
    const componentRef = this.elRefMap.get(hostElement);
    if (componentRef) {
      componentRef.$destroy();
      this.elRefMap.delete(hostElement);
      const unbindEvents = this.elEventsMap.get(componentRef);
      if (unbindEvents) {
        unbindEvents();
        this.elEventsMap.delete(componentRef);
      }
      hostElement.remove();
    }

    return Promise.resolve();
  }
}

export const svelteDelegate = new SvelteDelegate();

const LIFECYCLES = [LIFECYCLE_WILL_ENTER, LIFECYCLE_DID_ENTER, LIFECYCLE_WILL_LEAVE, LIFECYCLE_DID_LEAVE, LIFECYCLE_WILL_UNLOAD];

export function bindLifecycleEvents(instance: any, element: HTMLElement) {
  const unregisters = LIFECYCLES.map(eventName => {
    const handler = (ev: any) => {
      if (typeof instance[eventName] === "function") {
        instance[eventName](ev.detail);
      }
    };
    element.addEventListener(eventName, handler);
    return () => {
      element.removeEventListener(eventName, handler);
    };
  });
  return () => {
    unregisters.forEach(fn => fn());
  };
}
