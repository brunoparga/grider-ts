class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index]
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index]
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index]
  }
}

// No need for explicit generic annotation
const arr = new ArrayOfAnything(['a', 'b', 'c'])

function printAnything<T>(arr: T[]): void {
  for (let elt of arr) {
    console.log(elt)
  }
}

// Generic constraints

class Car {
  print() {
    console.log('I am a car');
  }
}

class House {
  print() {
    console.log('I am a house');
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let item of arr) {
    item.print();
  }
}


printHousesOrCars([new House(), new Car()])