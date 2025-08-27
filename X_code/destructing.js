// Destructuring = a short and clean way to extract values from arrays or objects into variables.


// Object Destructuring
const person = { name: "Amit", age: 22 };

// Normal way
let name1 = person.name;
let age1 = person.age;

// Destructuring
let { name, age } = person;

console.log(name); // Amit
console.log(age);  // 22

//Rename variables:

let { name: fullName, age: years } = person;
console.log(fullName, years); // Amit 22



let [first1, , third] = [1, 2, 3];
console.log(first1, third); // 1 3


// Destructuring with Rest

let [first, ...rest] = [1, 2, 3, 4];
console.log(first); // 1
console.log(rest);  // [2, 3, 4]

let { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(a);      // 1
console.log(others); // { b: 2, c: 3 }
