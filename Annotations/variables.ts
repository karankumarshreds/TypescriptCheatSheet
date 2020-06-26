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


// WHEN TO USE ANNOTATIONS ? 
// 1. When a function returns "any" type and we need to clarify the value.
const json = '{"x": 10, "y":20}';
const coordinates = JSON.parse(json);
console.log(coordinates) // {x: 20, y: 20}
// Both return "any" type, which means the returned value can be of any type.
/***********************************************************************
 * NOTE : TypeScript cannot infer ANY type. Hence we will use annotaions.
 ***********************************************************************/
// THEREFORE 
const correctCoordinates: { x: number, y: number } = JSON.parse(json);

// 2. Varialble whose type cannot be inferred correctly 
let numbers = [-10, -1, 12];
// assign number if present else assign false 
// type inference won't let us assign anything 
// let numberAboveZero = false; // but the boolean value to this 
let numberAboveZero: boolean | number = false;
numbers.forEach(each => {
    if (each > 0) {
        numberAboveZero = each;
    };
});





