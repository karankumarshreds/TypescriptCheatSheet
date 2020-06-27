/**************
 * ES5 classes
 *************/
class Vehicle {
    drive(): void {
        console.log('vroom vroom..!!')
    };
};
const vehicle = new Vehicle();
// vehicle.drive();

// Inheritence 
class Car extends Vehicle {
    honk(): void {
        console.log('Beep ..!');
    };
};
const chevvy = new Car;
//chevvy.honk();
//chevvy.drive();

/********************************************************************************************************
 * In ES2015 classes, all the methods of the classes are public.
 * Means, they can be called anywhere and anytime.
 *******************************************************************************************************
 * MODIFIERS:
 * PUBLIC method : By default all the methods are public
 * PRIVATE methods : Can only be called by the methods in the same class
 * PROTECTED methods: Can only be called by the methods in this class or by the methods in child classes
 * *****************************************************************************************************
 * NOTE : You cannot override the modifier type if that method is called in it's child class
 *******************************************************************************************************/

class Animals {
    color: string;
    constructor(color: string) {
        this.color = color;
    };
    protected tailProperty(): void {
        console.log('Has a tail');
    };
};
class Dog extends Animals {
    private soundProperty(): void {
        console.log('Woof Woof !');
    };
    tailProperty() {
        console.log('Has only 1 tail');
    }

    // using this public method to eventually
    // make the soundProperty accessible to 
    // outside world
    access(): void {
        this.soundProperty();
        this.tailProperty();
    }
};
const peppy = new Dog('grey');
//console.log(peppy.color);
// peppy.tailProperty();
// peppy.access();

class Languages {
    public language: string;
    constructor(language: string) {
        this.language = language;
    };
    public timeToLearn(): void {
        console.log('Takes 5 days to learn');
    };
};
class Python extends Languages {
    timeToLearnPython(): void {
        console.log('Takes 5 days to learn');
    };
};

const x = new Languages('typeScript');
const y = new Python('javaScript');
// the constructor in Python's parent class requires a string to be passed 
// that's why we have to pass what the parent class's constructor requires 
//console.log(y.language);

/***********************************************************************
 * WHAT IF WE ASSIGN CHILD CLASS A CONSTRUCTOR OF IT'S OWN ?
 * 
 * Whenever we call the constructor function of the child class, 
 * we are required to call the constructor of the parent class as well.
 * 
 * super() <= is the reference to the constructor function in the parent
 * 
 ***********************************************************************/

class Food {
    type: string; // veg or non veg
    constructor(type: string) {
        this.type = type;
    };
};
class Italian extends Food {
    flavor: string;
    constructor(flavor: string, type: string) {
        super(type);
        this.flavor = flavor;
    };
};
const foodItem = new Italian('Veg', 'Red Sauce');
console.log(foodItem.type);
console.log(foodItem.flavor);


