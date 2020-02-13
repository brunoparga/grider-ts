import { Model } from '../models/Model';

export abstract class View<T extends Model<U>, U> {
  regions: { [key: string]: HTMLElement } = {};

  constructor(
    public parent: HTMLElement,
    public model: T,
  ) {
    this.bindModel();
  }

  abstract template(): string;

  eventsMap(): { [key: string]: () => void } {
    return {};
  }

  regionsMap(): { [key: string]: string } {
    return {};
  }

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

  mapRegions(fragment: DocumentFragment): void {
    Object.entries(this.regionsMap())
      .forEach(([key, value]) => {
        const element = fragment.querySelector(value) as HTMLElement;
        if (element) {
          this.regions[key] = element;
        }
      });
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onRender(): void { }

  render(): void {
    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content);
    this.onRender();
    this.parent.append(templateElement.content);
  }
}
