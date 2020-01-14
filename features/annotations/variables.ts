export {};

let apples: number = 5;
let speed: string = 'ludicrous';

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: Array<number> = [1, 2, 6.2831]

// classes
class Car {

}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
}

// Function
const logNumber: (i: number) => void = (i) => {
  console.log(i)
}

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json) as { x: number; y: number }
console.log(coordinates);