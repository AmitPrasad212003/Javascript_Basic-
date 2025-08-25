// setTimeout() is a built-in asynchronous function in JavaScript that schedules a callback function to be executed after a specified delay (in milliseconds).

console.log("Start");

setTimeout(() => {
  console.log("Timer done");
}, 1000);

const start = Date.now();
while (Date.now() - start < 3000) {} // Block 3s

console.log("End");


console.log("Start");

setTimeout(() => {
  console.log("Timer done");
}, 2000);

console.log("End");
