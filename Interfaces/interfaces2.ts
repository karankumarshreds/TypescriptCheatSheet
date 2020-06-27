// interface 
interface Truck {
    name: string;
    year: Date;
    broken: boolean;
    summary(): string;
};
// function using interface
const printTruck = (truck: Truck): void => {
    console.log(truck.name);
    console.log(truck.year);
    console.log(truck.broken);
    console.log(truck.summary());
}
// object to be passed in above function
const hyundai = {
    name: 'i50',
    year: new Date(),
    broken: false,
    summary(): string {
        return `Name: ${this.name}`;
    }
};
printTruck(hyundai);