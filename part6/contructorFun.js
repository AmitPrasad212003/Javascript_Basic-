function Person(name, age) {
    this.name = name
    this.age = age

}

function Car(make, model){
    this.make = make
    this.model = model
}

let myCar = new Car("Toyota","Camry");
// console.log(myCar);

let myNewCar = new Car("TATA", "Safari");
// console.log(myNewCar);

function Tea(type){
    this.type = type
    this.describe = function(){
        return `this is a cup of ${this.type}`;
    }
}
let lemoneTea = new Tea("Lemon Tea")
// console.log(lemoneTea);
// console.log(lemoneTea.describe());

function Animal(species){
    this.species = species;
}

Animal.prototype.sound = function(){
    return `${this.species} makes a sound`;
}

let dog = new Animal("Dog");
// console.log(dog);
// console.log(dog.sound());

let cat = new Animal("cat");
// console.log(cat);
// console.log(cat.sound());


function Drink(name){
    if(!new.target){
        throw new Error("Drink must be called with new keyword");
    }
    this.name = name;
}
let Tea = new Drink("Tea");
let water = Drink("water");
console.log(water);
