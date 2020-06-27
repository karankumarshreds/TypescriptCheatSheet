interface Report {
    summary(): string;
};
const cat = {
    name: 'Stringer',
    age: 5,
    summary(): string {
        return `Name of my cat is ${this.name}`;
    }
};
// we are using interface to check if the 
// item being passed has a method summary
const printSummary = (item: Report): void => {
    console.log(item.summary());
};
printSummary(cat);


