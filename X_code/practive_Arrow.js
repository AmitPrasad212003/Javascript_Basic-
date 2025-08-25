// Write an  arrow function named array Average that accepts an array of numbers and returns the average of those numbers.

const arrayAverage = (arr) => {
    let total = 0;
    for(let number of art){
        total += number;
    }
    return total / arr.length;
};

let arr = [1,2, 3, 4, 5,6];
console.log(arrayAverage(arr));



// is even
let num = 4;
const isEven = num => num % 2 == 0;
