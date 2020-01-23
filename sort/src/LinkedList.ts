import { Sorter } from './Sorter'

class Node {
  next: Node | null = null;

  constructor(public data: number) { };
}

export class LinkedList extends Sorter {
  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data)

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  get length(): number {
    let length = 0;
    let node = this.head;
    while (node) {
      length++;
      node = node.next;
    }
    return length;
  }

  at(index: number): Node {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    throw new Error('Index out of bounds.')
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    [this.at(leftIndex).data, this.at(rightIndex).data] =
      [this.at(rightIndex).data, this.at(leftIndex).data]
  }

  print(): string {
    let items = '';
    let node = this.head;
    while (node) {
      items += node.data
      if (node.next) {
        items += ' -> ';
      }
      node = node.next;
    }
    return `LinkedList(${items})`
  }
}