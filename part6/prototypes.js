let computer = {cpu: 12}
let lenvo = {
    screen: "HD",
    __proto__: computer,
}
let tomHardware = {};

// console.log(`computer `, computer.__proto__);
// console.log(`Lenvo `, lenvo.__proto__);


let genericCar = {tyres : 4}
let tesla = {driver : "AI"};

Object.setPrototypeOf(tesla, genericCar); // inplace of __proto__ we use this finction | they do same thing

console.log(`Tesla `,tesla);
console.log(`Tesla `,tesla.tyres);

console.log(`Tesla `, Object.getPrototypeOf(tesla));


console.log(`GenericCar `,genericCar);
