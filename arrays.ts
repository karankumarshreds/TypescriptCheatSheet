// Inference 
const carMakers = ['toyota', 'ford', 'chevy'];
const dates = [new Date(), new Date()];

// With Annotaions 
const carsByMake = [
    ['f150'],
    ['corola'],
    ['camaro']
];
carMakers.map((each: string): string => {
    return each.toUpperCase();
});

// Annotation required 
const cats: string[] = [];
const dags: string[][] = [];

// Flexible types (when any is required)
const importantDates = [new Date(), '2030-10-10'];
// or 
const rank: (string | number)[] = ['one', 1];
// if we know we can have specific types 
const someArray: (string | number | Date)[] = [];
someArray.push('string');
someArray.push(1);
someArray.push(new Date());
// console.log(someArray);
