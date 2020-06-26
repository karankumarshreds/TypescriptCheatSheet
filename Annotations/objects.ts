const profile = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age: number): void {
        this.age = age;
    }
};
// with annotations // not required though 
const { age }: { age: number } = profile;

// with annotaions 
const { coords: { lat, lng } }: { coords: { lat: number, lng: number } } = profile;

