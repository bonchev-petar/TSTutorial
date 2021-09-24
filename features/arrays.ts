const carMakers: string[] = ['ford', 'audy', 'bmw'];
const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['a4'], ['3']];

const car = carMakers[0];
const myCar = carMakers.pop();

carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// flexible types

const importantDates = [new Date(), '2030-01-24'];
importantDates.push('2030-01-24');
importantDates.push(new Date());
