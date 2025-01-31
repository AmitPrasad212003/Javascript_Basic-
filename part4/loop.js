//question 1 while

let sum = 0;
let i = 1;
while (i<=5) {
    sum += i;
    // sum += 1;
    i++;
}
// console.log(sum);

// question 2 while

let countdown = []
let j = 5;
while (j > 0) {
    countdown.push(j);
    j--;
}
// console.log(countdown);

// question 3 do while

// let teaCollection = []
// let tea;
// do {
//    tea = prompt(`Enter your favourite tea (type "stop" to finish)`); // prompt support only in browser!
//    if (tea !== "stop") {
//         teaCollection.push(tea)
//    }
// } while (tea !== "stop");

// question 4 do whileloop

let total = 0;
let k = 1;
do {
    total += k;
    k++;
} while (k <= 3);

// console.log(total);


// question 5 for loop

let mulipliedNumbers = []
let numbers = [2,4,6]

for (let index = 0; index < numbers.length; index++) {
    //  mulipliedNumbers[index] = numbers[index]*2;
    //  takeNUmber = numbers[index]*2;
    //  mulipliedNumbers.push(takeNUmber);
    mulipliedNumbers.push(numbers[index] * 2);
    
}
// console.log(mulipliedNumbers);

// question 6 for loop

let cities = ["Paris", "New York", "Tokyo","London"];
let cityList = [];

for (let index = 0; index < cities.length; index++) {
    cityList.unshift(cities[index]);
    
}
console.log(cityList);

