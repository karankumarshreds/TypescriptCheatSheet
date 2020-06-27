interface Report {
    summary(): string;
};
// obj1 with a similar method as obj2
// of type Report
const dog = {
    name: 'Huskey',
    age: 5,
    summary(): string {
        return `Name of my Huskey is ${this.name}`;
    }
};
// obj2 with a similar method as obj1
// of type Report
const tiger = {
    color: 'white',
    alive: true,
    summary(): string {
        return `Color of the tiger is ${this.color}`
    }
};
// we are using interface to check if the 
// item being passed has a method summary
const printItemSummary = (item: Report): void => {
    console.log(item.summary());
};
printItemSummary(cat);
printItemSummary(tiger);

