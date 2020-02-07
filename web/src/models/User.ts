import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';


export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootURL = 'http://localhost:3000/users';

export class User {
  public attributes: Attributes<UserProps>;

  public events = new Eventing();

  public sync: Sync<UserProps> = new Sync<UserProps>(rootURL);

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }
}
