export {}

const add = (a: number, b: number): number => {
  return a + b;
}

// Don't rely on return type inference:
const subtract = (a: number, b: number) => {
  a - b;
}
// This actually returns void!

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
}

const logger = (message: string): void => {
  console.log(message);
}

const throwError = (message: string): never => {
  throw new Error(message);
}

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
}

const logWeather = ({ date, weather }: { date: Date; weather: string }): void => {
  console.log(date);
  console.log(weather)
}

logWeather(todaysWeather)