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

//Write a JavaScript function that returns array elements larger than a number

let arr = [8,9,10,1,2,3,4,5,6,7];
let num = 5;
//elements larger than  a number num 
function getElements(arr,num){
    for(let i = 0; i<arr.length; i++){
        if(arr[i]>num){
            console.log(arr[i]);
        }
    }
}
getElements(arr,num);

//Write  a JavaScript function to extract unique characters from a string.
let str1 ="abcdabcdefgggh";

// function to get String with all unique elements
function getUnique(str){
    let ans = "";

    for(let i = 0; i < str.length; i++){
        let currChar = str[i];
        if(ans.indexOf(currChar) == -1){
            ans += currChar;
        }
    }
    return ans;
}

console.log(getUnique(str1));
;

//returns the longest country name as output.
let country = ["Australia","Germany","UnitedStatesofAmerica"];

function logestName(country){
    let ansIdx = 0;
    for(let i = 0; i < country.length; i++){
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;
        if(currLen > ansLen){
            ansIdx = i;
        }
    }
    return country[ansIdx];
}

console.log(logestName(country));
;
//function to count the number of vowels in aString argument
let str2 = "apnacollege";

function countVowel(str){
    let count = 0;
    for(let i = 0; i< str.length; i++){
        if(str.charAt(i) == "a" ||
            str.charAt(i) == "e" ||
            str.charAt(i) == "i" ||
            str.charAt(i) == "o" ||
            str.charAt(i) == "u"){
                count++;
            }
    }
    return count;
}

console.log(countVowel(str2));
;

//Write  a JavaScript function to generate a random number within a range(start,end)

let start = 100;
let end = 200;

function generateRandom(start, end){
    let diff = end - start;
    return Math.floor(Math.random()*diff) + start;
}

console.log(generateRandom(start, end));
;