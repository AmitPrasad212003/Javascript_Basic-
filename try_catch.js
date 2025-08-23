try {
  console.log(abc); // 'abc' not defined
} catch (e) {
  console.log(e.name);  // ReferenceError
}

try {
  eval("let a = ;"); // Invalid syntax
} catch (e) {
  console.log(e.name);  // SyntaxError
}


try {
  let num = 10;
  num.toUpperCase(); // num is not a string
} catch (e) {
  console.log(e.name);  // TypeError
}


try {
  decodeURI("%"); // Invalid URI
} catch (e) {
  console.log(e.name);  // URIError
}


try {
  throw new AggregateError([
    new Error("Error 1"),
    new Error("Error 2")
  ], "Multiple errors occurred");
} catch (e) {
  console.log(e.name);     // AggregateError
//   console.log(e.errors);   // [Error: Error 1, Error: Error 2]
}


console.log(typeof ([1,2] + 3)); // "1,23"
console.log([1,2] + 3); // "1,23"
