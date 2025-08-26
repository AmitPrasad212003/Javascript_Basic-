// ForEach : Runs a callback on each element. (Doesn’t return anything)
[1, 2, 3].forEach(num => console.log(num * 2));


//map  : Returns a new array by transforming each element.
let arr = [1, 2, 3];
const doubled = arr.map(num => num * 2); 
console.log(doubled); // [2, 4, 6]
console.log(arr);


// filter() : Returns a new array with elements that match a condition.

const evens = [1, 2, 3, 4].filter(num => num % 2 === 0);
console.log(evens); // [2, 4]



// every() : Returns true if all elements match.
console.log([2, 4, 6].every(x => x % 2 === 0)); // true


// some() : Returns true if any element matches the condition.
console.log([1, 2, 3].some(x => x > 2)); // true


// reduce() Reduces the array to a single value.
const sum = [1, 2, 3, 4].reduce((acc, val) => acc + val,0);
console.log(sum); // 10
// arr.reduce((accumulator, currentValue, index, array) => { ... }, initialValue);


let arr1 = [1,2,3,234,5234,6,6,37,734,8,94];

let max = arr1.reduce((max, el) => {
    if(max < el){
        return el;
    }else{
        return max;
    }
});

console.log(max);


// check if all number in our array are multiples of 10 or not . 

let nums = [10,20,30,40];
let ans = nums.every((el) => el % 10 == 0);

console.log(ans);


// Create a function the min number in an array .
let min = arr1.reduce((min, el) => {
    if(min < el){
        return min;
    }else{
        return el;
    }
});
console.log(min);
