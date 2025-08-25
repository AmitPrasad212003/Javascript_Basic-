let count = 0;

let id = setInterval(() => {
  count++;
  console.log("Interval tick:", count, "ID:", id);

  if (count === 5) {
    clearInterval(id); // stop after 5 ticks
  }
}, 1000);

console.log("Interval ID:", id);


// setInterval(fn, delay) is a built-in asynchronous JavaScript function.

// It repeatedly executes a given function (fn) after every delay milliseconds until you stop it using clearInterval.