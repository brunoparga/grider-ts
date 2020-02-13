import { Model } from '../models/Model';

export abstract class View<T extends Model<U>, U> {
  constructor(
    public parent: HTMLElement,
    public model: T,
  ) {
    this.bindModel();
  }

  abstract eventsMap(): { [key: string]: () => void };

  abstract template(): string;

  bindModel = (): void => {
    this.model.on('change', () => this.render());
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
