const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true
};
// long way 
const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Boken?: ${vehicle.broken}`);
};
printVehicle(oldCivic);

// Better way using Interface 
interface Vehicle {
    name: string;
    year: number;
    broken: boolean;
};  // refers to a type 
const printVehicle2 = (vehicle: Vehicle): void => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Boken?: ${vehicle.broken}`);
};
printVehicle2(oldCivic);
