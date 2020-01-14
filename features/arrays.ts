export {};

const carMakers = ['ford', 'toyota', 'chevy']
const numbers: number[] = []
const dates = [new Date(), new Date()]

const carsByMake = [
  ['f150'],
  ['corolla'],
  ['camaro']
]

// Help with inference when extracting values
const car = carMakers[0]

// Prevent incompatible values
carMakers.push('mazda')

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
})

// Flexible types
const importantDates: (string | Date)[] = [new Date()];
importantDates.push('2186-07-16');