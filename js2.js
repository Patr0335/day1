console.log("Car array");
const cars = [
    {id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000},
    {id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900},
    {id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000},
    {id: 4, year: 1996, make: 'Jeep', model: 'Grand', price: 4799},
    {id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799}
];
console.log(cars);
console.log(cars.filter(currentElement => currentElement.year >= 1999));
console.log(cars.filter(currentElement => currentElement.make === 'Volvo'));
console.log(cars.filter(currentElement => currentElement.price < 5000));