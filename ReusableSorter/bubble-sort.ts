import { NumbersCollection } from "./NumbersCollection"
import { CharactersCollection } from './CharactersCollection'

export interface Sortable {
    length: number
    compare(leftIndex: number, rightIndex: number): boolean
    swap(leftIndex: number, rightIndex: number): void
}
// any class can be passed to this main class and this class will go ahead and sort it 
// does not matter if it is an array, or a string or even a linked list 
// we don't need to know how these things are sorted, we just need to provide three attributes 
// of array/string/linked-list or anything : 1. length 2. compare() 3. swap() in their respective classes
// and this method below will do it's magic and sort it! this is how reusable this code is 
class Sorter {
    collection: Sortable
    constructor(collection: Sortable) {
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

const arrayInstance = new NumbersCollection([1, -10, 8, -22, 3, 8, 44, 88, 66])
const sorter = new Sorter(arrayInstance)
sorter.sort()
// console.log(sorter.collection)

const stringInstance = new CharactersCollection('karanKumar')
const anotherSorter = new Sorter(stringInstance)
anotherSorter.sort()
console.log(anotherSorter.collection)
