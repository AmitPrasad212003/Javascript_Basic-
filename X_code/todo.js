const { log } = require("node:console");

let todo = [];

let req = prompt("please enter your request");

while(true){
    if(req == "quit"){
        console.log("Quitting app");
        break;
    }

    if(req == "list"){
        console.log("-------------");
        for(let i = 0; i < todo.length; i++){
            console.log(i,  todo[i]);
        }
        console.log("-------------");
    }else if(req == "add"){
        let task = prompt("Please enter the task you want to add");
        todo.push(task);
        console.log("Task added");
    }else if(req == "delete"){
        let idx = prompt("please enter the task index.");
        todo.splice(idx, 1);
        console.log("Task Deleted");
    }else{
        console.log("Wrong request");
        
    }


    req = prompt("please enter your request");

}




// practice 

let arr = [1,2,3,4,5,6,2,3];
let num = 2;
for(let i = 0;i<arr.length;i++){
    if(arr[i]==num){
        arr.splice(i,1);
    }

}console.log(arr);


// let number =  287152;
// let count = 0;
// let copy = number;

// while(copy > 0){
//     count++;
//     copy = Math.floor(copy/10);
// }

// console.log(count);


let number =  287152;
let sum = 0;
let copy = number;

while(copy > 0){
    digit = copy % 10;
    sum += digit;
    copy = Math.floor(copy/10);
}

console.log(`Sum of digits = ${sum}`);


// factorial 

let n = 5;
let factorial = 1;

for(let i = 1; i <= n; i++){
    factorial *= i;
}
console.log(`Factorial of ${n} is ${factorial}`);



// largest number in the array 

let arr1 = [2,5,10,4,7,1,9];
let largest = 0;

for(let i = 0; i <= arr1.length; i++){
    if(largest < arr1[i]){
        largest = arr1[i];
    }
}

console.log(`largest element of array is ${largest}`);

