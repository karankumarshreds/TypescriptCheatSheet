const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};
// as a tuple (array as of now) 
// the order can be changed which we don't want 
const pepsi = ['brown', true, 40];
// turn it into a TUPLE 
const cola: [string, boolean, number] = ['brown', true, 45];
// better way to avoid DRY
type Drink = [string, boolean, number];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['clear', true, 0];
