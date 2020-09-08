class NumberArray {
  collection: number[]
  constructor(array: number[]) {
    this.collection = array;
  }
  get(index: number) {
    return this.collection[index];
  }
}

class StringArray {
  collection: string[]
  constructor(array: string[]) {
    this.collection = array;
  }
  get(index: number) {
    return this.collection[index];
  }
}
// this will be used as inference because T will 
// be assigned as a type on the fly while initializing 
class ArrayOfAnything<T>{
  collection: T[];
  constructor(array: T[]) {
    this.collection = array;
  }
  get(index: number) {
    return this.collection[index];
  }
}
const arr = new ArrayOfAnything(['a', 'b'])

/** CASE 2 **/
// but we can force/constraint type as well for any custom type 
class ArrayOfAnytype<T extends boolean | number> {
  collection: T[];
  constructor(array: T[]) {
    this.collection = array;
  }
  get(index: number) {
    return this.collection[index];
  }
}
// this wont let you pass in any array other than boolean or number 
const arr2 = new ArrayOfAnytype([])
