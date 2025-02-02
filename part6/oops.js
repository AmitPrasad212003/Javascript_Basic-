let car = { 
    make: "Toyota",
    model: "Camry",
    year: 2020,

    start: function(){
        return `${this.make} car got satrted in ${this.year}`;
    }
}
// console.log(car.start());

function Person(name, age){
    this.name = name,
    this.age = age
}

let john = new Person("John Deo", 20)
// console.log(john.age);


// prototype chain

function Animal(type){
    this.type = type
}

Animal.prototype.speak = function(){
    return `{this.type} amke a sound`;
}

Array.prototype.amit = function (){
    return `Custom method ${this}`;
}

let myArray = [1,2,4,5,6];
// console.log(myArray.amit());
let myArray1 = [1,2,4,5,56,67,6];
// console.log(myArray1.amit());


// class

class Vehicle{
    constructor(make,model){
        this.make = make;
        this.model = model;
    }

    start(){
        return `${this.model} is a car from ${this.make}`;
    }
}

class Car extends Vehicle{
    drive(){
        return `${this.make} : This is an inheritance example`;
    }
}

let newCar = new Car("Toyota", "Corolla");
// console.log(newCar.start());
// console.log(newCar.drive());

let vehOne = new Vehicle("TATA","Condo")
// console.log(vehOne.start());



// Encapsulation

class BankAccount {
    #balance = 0;
    
    deposite(amount){
        this.#balance += amount;
        return this.#balance;
    }

    getBalance(){
        return `$ ${this.#balance}`
    }
}


let account = new BankAccount();
// console.log(account.#blance);
// console.log(account.deposite(5000));
// console.log(account.getBalance());
// console.log(account.deposite(5000));

// Abstraction

class CoffeMachine{
    start(){
        // call DB
        // filter value
        return `Starting the machine...`;
    }
    brewCoffee(){
        // complex calculation
        return `Brewing coffee...`;
    }

    pressStartButton(){
        let msg1 = this.start();
        let msg2 = this.brewCoffee();
        return`${msg1} \n${msg2}`
    }

}

let mymachine = new CoffeMachine();
// console.log(mymachine.start());
// console.log(mymachine.brewCoffee());
// console.log(mymachine.pressStartButton());

// Polymorphism

class Bird{
    fly(){
        return `Flying ...`;
    }
}

class Penguin extends Bird {
    fly(){
        return `Penguin can't fly`;
    }
}

let bird = new Bird();
let penguin = new Penguin();

// console.log(`Bird : ${bird.fly()}`);
// console.log(`Penguin : ${penguin.fly()}`);

//static method

class Calculator{
    static add(a, b){
        return a + b;
    }
} 

// let minCal = new Calculator();
// console.log(minCal);
// console.log(minCal.add(2, 4)); // error

// console.log(Calculator.add(2, 4));

// getter and setters

class Employee{
    #salary
    constructor(name, salary){
        if(salary < 0 ){
            throw new Error("Salary cannot be in negative");
            
        }
        this.name = name;
        this.#salary = salary;
    }

    get salary(){
        return `You are not allowed to ssee salary`;

    }
    set salary(value){
        if(value < 0){
            console.error("INvaild salary!");
        }else{
            this.#salary = value;
        }
    }
}

let emp = new Employee("Naman", 50000);
console.log(emp.salary);
emp.salary = 600000;

