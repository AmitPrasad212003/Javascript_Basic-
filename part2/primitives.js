// number

let balance = 120;
let anotherBalance = new Number(120)

// console.log(balance);
// console.log(anotherBalance);
// console.log(anotherBalance.valueOf());


// console.log(typeof(balance));
// console.log(typeof anotherBalance);

// boolean 
let isActive = true
let isreallyActive = new Boolean(true) // not recommended


// null and undefined

// let firstname;
// console.log(firstname);

// let lastname = null;
// console.log(lastname);
// let lastname1 = undefined;
// console.log(lastname1);


// string

let myString = "Hello"
let myStringOne = 'Hola'
let username = "Amit"

let oldGreet = myString + " " + "Amit"
// console.log(oldGreet);

let greetMessage = `Hello ${username} !`;// this is known as String Interpolation 
console.log(greetMessage);

let demoOne = `value is ${2*2}`;
// console.log(demoOne);

let sm1 = Symbol("Amit");
let sm2 = Symbol("Amit");

console.log(sm1 == sm2);
console.log(sm1);
console.log(sm2);




