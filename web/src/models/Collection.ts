import axios from 'axios';

import { Eventing } from './Eventing';

export class Collection<T, U> {
  models: T[] = [];

  events: Eventing = new Eventing();

  constructor(
    public rootURL: string,
    public deserialize: (json: U) => T,
  ) {}

  get on(): Function {
    return this.events.on;
  }

  get trigger(): Function {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootURL)
      .then((res) => {
        this.models = res.data.map((props: U): T => this.deserialize(props));
      })
      .then(() => this.trigger('change'));
  }
}
