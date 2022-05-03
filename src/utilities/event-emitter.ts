export type EventEmitterHandler = (...args: any) => void;

export class EventEmitter {
  private subscribers: EventEmitterHandler[] = [];

  subscribe(handler: EventEmitterHandler): EventEmitterHandler {
    this.subscribers.push(handler);
    return handler;
  }

  unsubscribe(handler?: EventEmitterHandler) {
    if (handler) {
      this.subscribers.splice(this.subscribers.indexOf(handler), 1);
    }
  }

  emit(...args: any) {
    const cache = this.subscribers && this.subscribers.slice();
    if (cache) {
      cache.forEach(handler => {
        handler.apply(this, args);
      });
    }
  }
}
