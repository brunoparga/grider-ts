interface UserProps {
  name?: string;
  age?: number
}

type Callback = () => void

// eslint-disable-next-line import/prefer-default-export
export class User {
  events: { [key: string]: Callback[] } = {}

  constructor(private data: UserProps) {
    this.data = data;
  }

  get(propName: string): (number | string) {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {

  }
}
