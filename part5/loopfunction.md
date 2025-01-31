
# Task 1: Sum of First N Natural Numbers

### Problem:
Write a function `sumOfN(n)` that returns the sum of the first n natural numbers.

### Solution:
```javascript
function sumOfN(n) {
    // Formula for sum of first n natural numbers: n * (n + 1) / 2
    return (n * (n + 1)) / 2;
}

// Example usage:
let n = 5;
console.log(sumOfN(n));  // Output: 15
```

---

# Task 2: Multiplication Table

### Problem:
Write a function `printMultiplicationTable(n)` that returns the multiplication table for n. Values returned in the array must be of the format `2 * 2 = 4`.

### Solution:
```javascript
function printMultiplicationTable(n) {
    let table = [];
    for (let i = 1; i <= 10; i++) {  // Generate table for n from 1 to 10
        table.push(`${n} * ${i} = ${n * i}`);
    }
    return table;
}

// Example usage:
let n = 3;
console.log(printMultiplicationTable(n));
// Output: ['3 * 1 = 3', '3 * 2 = 6', '3 * 3 = 9', ..., '3 * 10 = 30']
```

---

# Task 3: Count Vowels in a String

### Problem:
Write a function `countVowels(str)` that returns the number of vowels (in both lowercase & uppercase) in the given string `str`.

### Solution:
```javascript
function countVowels(str) {
    const vowels = "aeiouAEIOU";  // Both lowercase and uppercase vowels
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// Example usage:
let inputStr = "Hello World";
console.log(countVowels(inputStr));  // Output: 3
```
