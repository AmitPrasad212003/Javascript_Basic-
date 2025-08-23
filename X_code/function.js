function hello() {
    console.log("Heloo bhaiya");
}

console.log(hello());
console.log(hello);


// Roll a dice & (1 - 6)

function rollDice(){
    let rand = Math.floor(Math.random() * 6) + 1;
    console.log(rand);   
}
console.log(rollDice());

function calAvg(a,b,c){
    let avg = (a+b+c)/3;
    console.log(avg);
}

console.log(calAvg(2,3,4));

function printTable(n){
    for(let i = n; i <= n * 10; i += n){
        console.log(i);
        
    }
}

console.log(printTable(13));

console.log( typeof printTable);


// sum of numbers from 1 to n

function getSum_n(n){
    let sum = 0;
    for(let i =0; i<= n ; i++){
        sum += i;
    }

    return sum;
}

console.log(getSum_n(10));
console.log(typeof getSum_n(10));
console.log();




// function that return the concatenation of all string in an array.

let str = ["hi", "hello", "bye", "!"];

function concat(str){
    let result = "";

    for (let i = 0; i< str.length; i++){
        result += str[i];
    }
    return result;
}

console.log(concat(str));
console.log(typeof concat(str));

//Higher-Order Functions
function greet(name) {
  return "Hello " + name;
}

function processUserInput(callback) {
  let name = "Amit";
  console.log(callback(name));
}

processUserInput(greet);  
// Output: Hello Amit


// Method 
const person = {
    name: "Amit",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

person.greet(); // Hello, Amit


const calculator  = {
    num : 55,
    add : function(a,b){
        return a+b;
    },
    sub : function(a,b){
        return a-b;
    },
    mul : function(a,b){
        return a*b;
    }
}

console.log(calculator);
console.log(typeof calculator);

console.log(calculator.num);
console.log(calculator.add);
console.log(calculator.sub(4,6));

calculator.div = function(a,b){
    return a/b;
}

console.log(calculator);
console.log(calculator.div(6,9));

console.log(typeof String);
