class Car {
  print() {
    console.log('I am a car')
  }
}
class House {
  print() {
    console.log('I am a house')
  }
}
function printSomething<T extends Car | House>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print()
  }
}
/** OR contraints using interface BETTER APROACH */

interface Printable {
  print: () => void
}
// we are telling that the array twhich will be passed will 
// be of the type interface WHICH MEANS it will NEED to have 
// print method attached to it. MEANS, it could be instance 
// of either Car or House or ANY class as long as it has a 
// method print() attached to it 
function printSomethingNow<T extends Printable>(arr: T[]) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print()
  }
}
// Hence this wont be allowed by TS 
// printSomethingNow(['a', 'b', c])

// this will be allowed 
const toyota = new Car();
const tesla = new Car();
const mansion = new House();
// boom!
printSomethingNow([toyota, tesla, mansion]);
/***** output *****
 * I am a car
 * I am a car
 * I am a house
 *****************/