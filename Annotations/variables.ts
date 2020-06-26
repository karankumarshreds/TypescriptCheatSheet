let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothing: null = null;
let nothingMuch: undefined = undefined;

// built in objects 
let now: Date = new Date();

// Array 
// array of type string only
let colors: string[] = ['red', 'green', 'blue'];
// array of type numbers
let myNumbers: number[] = [1, 2, 3];

// Class 
class Car {
};
// car can only be instance of class Car.
// We cannot make it instance of any other class
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20
};

// Function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};
logNumber(10);





