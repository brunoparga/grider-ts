import axios from 'axios';
import { User, UserProps } from './User';

import { Eventing } from './Eventing';

export class Collection {
  models: User[] = [];

  events: Eventing = new Eventing();

  // eslint-disable-next-line no-useless-constructor
  constructor(public rootURL: string) {};

  get on(): Function {
    return this.events.on;
  }

  get trigger(): Function {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootURL)
      .then((res) => {
        this.models = res.data.map((props: UserProps) => User.build(props));
      });
    this.trigger('change')
  }
}
