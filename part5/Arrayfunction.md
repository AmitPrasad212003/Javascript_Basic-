# Array Manipulation Tasks

This repository contains functions for solving common array manipulation tasks. Below is the combined solution for all tasks in one code block.

## Combined Code

```javascript
// Task 1: Array Filtering
function filterNumbers(arr) {
    return arr.filter(item => typeof item === 'number');
}

// Task 2: Array Reversal
function reverseArray(arr) {
    return arr.reverse();
}

// Task 3: Find Maximum in an Array
function findMax(arr) {
    return Math.max(...arr);
}

// Task 4: Remove Duplicates from an Array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Task 5: Flatten a Nested Array
function flattenArray(arr) {
    return arr.flat(Infinity);
}

// Testing the functions with examples

// Test 1: Array Filtering
console.log(filterNumbers([1, 'hello', 2, 'world', 3])); 
// Output: [1, 2, 3]

// Test 2: Array Reversal
console.log(reverseArray([1, 2, 3, 4])); 
// Output: [4, 3, 2, 1]

// Test 3: Find Maximum in an Array
console.log(findMax([1, 5, 3, 9, 2])); 
// Output: 9

// Test 4: Remove Duplicates from an Array
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); 
// Output: [1, 2, 3, 4, 5]

// Test 5: Flatten a Nested Array
console.log(flattenArray([1, [2, [3, [4]]]])); 
// Output: [1, 2, 3, 4]
