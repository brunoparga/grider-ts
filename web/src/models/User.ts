import { Model } from './Model';
import { Eventing } from './Eventing';
import { Attributes } from './Attributes';
import { APISync } from './APISync';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootURL = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
  static build(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new APISync<UserProps>(rootURL),
    );
  }
}
