# Task 1: Using `this` in Objects

**Question:**
Create an object `person` with a method `introduce()` that uses `this`. Additionally, add properties of `name` and `age` that will result in the output:

`Hi, my name is Hitesh and I am 19.5 years old` on calling `introduce()`.

**Solution:**
In this task, we create an object `person` with properties `name` and `age`, and a method `introduce()` that uses `this` to refer to the object.

```javascript
const person = {
  name: "Hitesh",
  age: 19.5,
  introduce: function() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

// Calling the method
person.introduce();

# Task 2: Function within a Function

**Question:**
Write a function `outer()` that contains another function `inner()` and returns a value of `'Inner function called'` on calling `outer()`.

**Solution:**
In this task, we create an outer function that contains another function (inner function) and returns a value when called.

```javascript
function outer() {
  function inner() {
    return 'Inner function called';
  }
  return inner();
}

// Calling the outer function
console.log(outer());

//output-> Inner function called
