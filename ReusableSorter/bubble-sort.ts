class NumbersCollection {
    data: number[]
    constructor(data: number[]) {
        this.data = data
    }
    // this way we can call the length property like 
    // *instance.length* without calling length as a function 
    get length(): number {
        return this.data.length
    }
    // to compare adjacent value and check if need swapping
    compare(leftIndex: number, rightIndex: number): boolean {
        // returns boolean
        return this.data[leftIndex] > this.data[rightIndex]
    }
    // swap the elements 
    swap(leftIndex: number, rightIndex: number): void {
        let temp = this.data[leftIndex]
        this.data[leftIndex] = this.data[rightIndex]
        this.data[rightIndex] = temp
    }
}

class Sorter {
    collection: NumbersCollection
    constructor(collection: NumbersCollection) {
        this.collection = collection
    }
    sort(): void {
        const { length } = this.collection
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1)
                }
            }
        }
    }
}

const instance = new NumbersCollection([1, -10, 8, -22, 3, 8, 44, 88, 66])
const sorter = new Sorter(instance)
sorter.sort()
console.log(sorter.collection)


