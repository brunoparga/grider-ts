import { Collection } from '../models/Collection';

export abstract class CollectionView<T, U> {
  constructor(
    public parent: Element,
    public collection: Collection<T, U>,
  ) {}

  abstract renderItem(model: T, itemParent: HTMLElement): void

  render(): void {
    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');
    this.collection.models.forEach((model) => {
      const itemParent = document.createElement('div');
      this.renderItem(model, itemParent);
      templateElement.content.append(itemParent);
    });
    this.parent.append(templateElement.content);
  }
}
