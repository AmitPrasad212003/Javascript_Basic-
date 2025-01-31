# Array Methods in JavaScript

### Task 1: Using Array Methods - `squareNumbers(arr)`
This function takes an array of numbers and returns a new array with each number squared.

```javascript
const squareNumbers = arr => arr.map(num => num ** 2);

## Task 2: Custom Filter Function - `filterEvenNumbers(arr)`
This function filters the even numbers from an array.

```javascript
const filterEvenNumbers = arr => arr.filter(num => num % 2 === 0);

## Task 3: Sum of Positive Numbers - `sumPositiveNumbers(arr)`
This function calculates the sum of positive numbers in the array.

```javascript
const sumPositiveNumbers = arr => arr.filter(num => num > 0).reduce((acc, num) => acc + num, 0);

## Task 4: Transform Array of Objects - `getNames(arr)`
This function extracts the `name` property from an array of objects.

```javascript
const getNames = arr => arr.map(obj => obj.name);

## Task 5: Find the Longest Word - `findLongestWord(arr)`
This function finds the longest word in an array of words.

```javascript
const findLongestWord = arr => arr.reduce((longest, current) => current.length > longest.length ? current : longest, "");