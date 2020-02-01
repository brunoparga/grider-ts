interface UserProps {
  name?: string;
  age?: number
}

// eslint-disable-next-line import/prefer-default-export
export class User {
  constructor(private data: UserProps) {}

  get(propName: string): (number | string) {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
}
