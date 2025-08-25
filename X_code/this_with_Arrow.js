// // Inside a Class
// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   normalMethod() {
//     console.log("Normal:", this.name);
//   }

//   arrowMethod = () => {
//     console.log("Arrow:", this.name);
//   };
// }

// const user = new User("Amit");
// user.normalMethod(); // ✅ "Normal: Amit"
// user.arrowMethod();  // ✅ "Arrow: Amit"


// //Inside an Object
// const obj = {
//   name: "Amit",
//   normal: function () {
//     console.log("Normal:", this.name);
//   },
//   arrow: () => {
//     console.log("Arrow:", this.name);
//   }
// };

// obj.normal(); // ✅ "Normal: Amit"
// obj.arrow();  // ❌ "Arrow: undefined" (because arrow takes `this` from outer scope, not obj)


// // setTimeout / setInterval

// setTimeout(function () {
//   console.log("Normal Timeout:", this);
// }, 1000);

// setTimeout(() => {
//   console.log("Arrow Timeout:", this);
// }, 1000);


// // Write an arrow function that return the square of a number 'n'

// const square = n => (n*n);
// console.log(square(59));

// // Write a function that print "Hello World" 5 times at interval of 2s each.

let count = 0;
const id = setInterval(() => {
    count++;
    console.log("hello Bhaiya");
    // if(count == 5){
    // clearInterval(id);
// }
    
}, 2000);

setTimeout(() => {
    clearInterval(id);
    console.log("Code is stop");
    
}, 10000);