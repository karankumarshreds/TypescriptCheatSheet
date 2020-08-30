// for the array of numbers 
export class NumbersCollection {
    data: number[]
    constructor(data: number[]) {
        this.data = data
    }
    // this way we can call the length property like *instance.length* without calling length as a function 
    get length(): number {
        return this.data.length
    }
    // to compare adjacent value and check if need swapping
    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex] > this.data[rightIndex]
    }
    // swap the elements 
    swap(leftIndex: number, rightIndex: number): void {
        let temp = this.data[leftIndex]
        this.data[leftIndex] = this.data[rightIndex]
        this.data[rightIndex] = temp
    }
}
