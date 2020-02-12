import { User } from '../models/User';

/* eslint-disable class-methods-use-this */
export class UserForm {
  constructor(
    public parent: HTMLElement,
    public model: User,
  ) {
    this.bindModel();
  }

  bindModel = (): void => {
    this.model.on('change', () => this.render());
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
    };
  }

  onSetAgeClick = (): void => this.model.setRandomAge();

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <div>User name: ${this.model.get('name')}</div>
        <div>User age: ${this.model.get('age')}</div>
        <input />
        <button>Click me</button>
        <button class="set-age">Set random age</button>
      </div>
    `;
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();
    Object.entries(eventsMap)
      .forEach(([eventKey, handler]: [string, EventListener]) => {
        const [eventName, selector] = eventKey.split(':');
        fragment.querySelectorAll(selector)
          .forEach((element) => element.addEventListener(eventName, handler));
      });
  }

  render(): void {
    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
}
