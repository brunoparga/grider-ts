import { Collection } from './Collection';
import { Model } from './Model';
import { Eventing } from './Eventing';
import { Attributes } from './Attributes';
import { APISync } from './APISync';

export interface UserProps {
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

  static buildCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(
      rootURL,
      (json: UserProps) => this.build(json),
    );
  }

  setRandomAge(): void {
    this.set({ age: Math.round(Math.random() * 100) });
  }
}
