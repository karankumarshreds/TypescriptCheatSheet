// this needs to match the interface 
export class CharactersCollection {
    data: string
    constructor(data: string) {
        this.data = data
    }
    get length(): number {
        return this.data.length
    }
    compare(leftIndex: number, rightIndex: number): boolean {
        return (
            this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
        )
    }
    // we cannot swap characters directly as in arrays because strings (primitive types) 
    // are immutable 
    swap(leftIndex: number, rightIndex: number): void {
        // split string into an array 
        const characters = this.data.split('')
        let temp = characters[leftIndex]
        characters[leftIndex] = characters[rightIndex]
        characters[rightIndex] = temp
        // revert it back to string 
        this.data = characters.join('')
    }
} 