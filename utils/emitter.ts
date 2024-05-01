/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-extraneous-class */
interface EventMap {
  'route-change': (to: string) => void;
}

type Events = keyof EventMap;

export default abstract class Emitter {
  private static events = new Map<Events, ((...args: any[]) => any)[]>();

  static emit<E extends Events>(
    event: E,
    ...args: Parameters<EventMap[E]>
  ): ReturnType<EventMap[E]>[] {
    if (!this.events.has(event)) {
      throw new Error(`Emitter '${event}' has not been created.`);
    }

    return this.events.get(event)?.map((callback) => callback(...args)) || [];
  }

  static on<E extends Events>(event: E, callback: EventMap[E]) {
    this.events.set(event, [...(this.events.get(event) || []), callback]);
  }

  static unbind(event: Events) {
    this.events.delete(event);
  }
}
