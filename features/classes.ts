export {};

class Vehicle {
  constructor(public color: string) {}

  public drive(): void {
    console.log('chugga chugga')
  }

  public honk(): void {
    console.log('beep')
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color)

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color)
  }

  drive(): void {
    console.log('vroooommmmm')
  }
}

const car = new Car(4, 'red');
car.drive();
car.honk();