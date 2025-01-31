// Example 
// function greet(name){
//     console.log(`Hello ${name}`);
    
// }
// greet("Amit")
// question 1 

function makeTea(typeOfTea){
    return `Making ${typeOfTea}`;
}

let teaorder = makeTea("Lemon Tea");
// console.log(teaorder);

function orderTea(teaType){
    function confirmOrder() {
        return`Order confirmed for chai`;
    }
    return confirmOrder();
}
let result = orderTea("chai");
// console.log(result);

// Arrow Function

function greet(){}
const greet1 = () => {} // arrow function / un-named function

// question 3 

// const calculateTotal = (price, quantity) => {
//     return price * quantity;
// }
// another way of writing arrow function
const calculateTotal = (price, quantity) => price * quantity
let totalCost = calculateTotal(45,120);
// console.log(totalCost);

function makeTea(typeOfTea){
    return `maketea: ${typeOfTea}`;
}
function processTeaOrder(teaFunction){ // first-class function / higher order function
    return teaFunction('earl grey');
}

let order = processTeaOrder(makeTea)
// console.log(order);

// question 5 

function createeTeaMaker (name){
    return function(teaType){
        return `Making ${teaType} -- ${name}`;
    }
}

let teamaker = createeTeaMaker("Amit");
console.log(teamaker);
let odr = teamaker("masala chai");
console.log(odr);


