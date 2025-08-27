// Square and sum and AVerage of the array;
let nums = [1,2,3,4,5];
const  square = nums.map((num) => num*num);
console.log(square);

let sum = square.reduce((acc, cur) => acc + cur, 0);
let avg = sum / nums.length;
console.log(avg);

// create a new array using map function whose each elements is equal to the original plus 5.

let arr = [23,45,56,7,678,56];

const result = arr.map(num => num + 5);
console.log(result);


// New array whose elements are in uppercase of words present in the original array

let string = ["sdf", "fferfe", "fergea", "grgr"];
console.log(string.map(str => str.toUpperCase()));



// return new array with the original array values and all of the additional arrgument double

const doubleAndReturnArgs = (arr, ...args) => [...arr,
    ...args.map((v) => v * 2),
];

console.log(doubleAndReturnArgs([1,2,3,4,5], 456,564));

console.log(doubleAndReturnArgs([23,465,462,2342], 532,352,23421,1));



// Merge Object

const mergeObject = (obj1, obj2) => ({...obj1, ...obj2});
console.log({a:1, b:2}, {c:3, d:4});
