// // ForEach : Runs a callback on each element. (Doesn’t return anything)
// [1, 2, 3].forEach(num => console.log(num * 2));


// //map  : Returns a new array by transforming each element.
// let arr = [1, 2, 3];
// const doubled = arr.map(num => num * 2); 
// console.log(doubled); // [2, 4, 6]
// console.log(arr);


// // filter() : Returns a new array with elements that match a condition.

// const evens = [1, 2, 3, 4].filter(num => num % 2 === 0);
// console.log(evens); // [2, 4]



// // every() : Returns true if all elements match.
// console.log([2, 4, 6].every(x => x % 2 === 0)); // true


// // some() : Returns true if any element matches the condition.
// console.log([1, 2, 3].some(x => x > 2)); // true


// // reduce() Reduces the array to a single value.
// const sum = [1, 2, 3, 4].reduce((acc, val) => acc + val,0);
// console.log(sum); // 10
// // arr.reduce((accumulator, currentValue, index, array) => { ... }, initialValue);


// let arr1 = [1,2,3,234,5234,6,6,37,734,8,94];

// let max = arr1.reduce((max, el) => {
//     if(max < el){
//         return el;
//     }else{
//         return max;
//     }
// });

// console.log(max);


// // check if all number in our array are multiples of 10 or not . 

// let nums = [10,20,30,40];
// let ans = nums.every((el) => el % 10 == 0);

// console.log(ans);


// // Create a function the min number in an array .
// let min = arr1.reduce((min, el) => {
//     if(min < el){
//         return min;
//     }else{
//         return el;
//     }
// });
// console.log(min);



// // Default Parameters
// function greet(name = "Guest") {
//   console.log("Hello, " + name);
// }

// greet("Amit");   // Hello, Amit
// greet();         // Hello, Guest   (default used)



// // Expressions as Default Values

// function randomNum(value = Math.random()) {
//   console.log(value);
// }

// randomNum();      // some random number
// randomNum(10);    // 10


// // Spread : The spread operator (...) is used to expand (spread out) elements of an array, object, or iterable into individual elements.

// const a = [1, 2];
// const b = [3, 4];

// const merged1 = [...a, ...b];
// console.log(merged1); // [1, 2, 3, 4]



// const arr11 = [3, 1, 2];
// const arr2 = [6, 4, 5];

// const merged = [...arr11, ...arr2].sort((a, b) => a - b);
// console.log(merged);
// // [1, 2, 3, 4, 5, 6]



// function sum1(...numbers) {   // rest: collects all args into an array
//   return numbers.reduce((acc, val) => acc + val, 0);
// }

// const arr3 = [1, 2, 3, 4];
// console.log(sum1(...arr3));   // spread: expands array into args
// // 10


// const data = {
//     email : "ironman@gmail.com",
//     password : "acrec",
// };
// console.log(data);

// const dataCopy = {...data, id : 123, country : "india"};
// console.log(dataCopy);


// let obj = {...arr1};
// console.log(obj);


// // Rest & Spread

// function sumx(...numbers) {   // rest: collects all args into an array
//   return numbers.reduce((acc, val) => acc + val, 0);
// }

// const arrx = [1, 2, 3, 4];
// console.log(sumx(...arr));   // spread: expands array into args
// // 10




function min1(){
    console.log(arguments.length);
    
}

console.log(min1(12,23,3,4));



// JavaScript functions are by default variadic (they accept any number of arguments).

function demo1(a, b) {
  console.log("a =", a);
  console.log("b =", b);
  console.log("all arguments =", arguments);
}

demo1(10, 20, 30, 40);


function demo(a, b, ...rest) {
  console.log("a =", a);
  console.log("b =", b);
  console.log("extra values =", rest);
}

demo(10, 20, 30, 40, 50);


//arguments (when we do not specify rest)

function demo2(a, b) {
  console.log(arguments); // Array-like
  let arr = Array.from(arguments); 
  console.log(arr.map(x => x * 2)); // works now
}

demo2(1, 2, 3, 4); // [2, 4, 6, 8]

//...rest (when we specify rest parameter)
function demo4(a, b, ...rest) {
  console.log(rest); // [3, 4]
  console.log(rest.map(x => x * 2)); // [6, 8]
}

demo4(1, 2, 3, 4);

