# JavaScript Prototypal Inheritance and Async Handling

## Task 1: Simulating Asynchronous Behavior
```javascript
function simulateAsyncTask() {
    console.log("Task started");
    setTimeout(() => {
        console.log("Task finished");
    }, 2000);
}
```

## Task 2: Simulate Multiple Async Tasks with Different Delays
```javascript
function simulateMultipleTasks() {
    setTimeout(() => console.log("Task 1 finished"), 1000);
    setTimeout(() => console.log("Task 2 finished"), 2000);
    setTimeout(() => console.log("Task 3 finished"), 3000);
}
```

## Task 3: Async Task with Callback Function
```javascript
function fetchDataWithCallback(callback) {
    setTimeout(() => {
        callback("Fetched data");
    }, 2000);
}
```

## Task 4: Creating a Counter Using Closures
```javascript
function createCounter() {
    let count = 0;
    return function () {
        return ++count;
    };
}
```

## Task 5: Rate Limiter Function
```javascript
function rateLimiter(fn, limit) {
    let lastCall = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastCall < limit) {
            return "Rate limit exceeded";
        }
        lastCall = now;
        return fn(...args);
    };
}
```

## Task 6: Memoization Function
```javascript
function memoize(fn) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}
```

## Task 7: Create Inheritance Using Prototypes
```javascript
function Animal() {}
Animal.prototype.makeSound = function () {
    return "Animal sound";
};

function Dog() {}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
    return "Woof!";
};
```

## Task 8: Shape and Rectangle Inheritance
```javascript
function Shape(color) {
    this.color = color;
}
Shape.prototype.getColor = function () {
    return this.color;
};

function Rectangle(color, width, height) {
    Shape.call(this, color);
    this.width = width;
    this.height = height;
}
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.getArea = function () {
    return this.width * this.height;
};
```

## Task 9: Bind the Correct Context
```javascript
const person = {
    name: "John",
    introduce: function () {
        return `Hi, my name is ${this.name}`;
    }
};
const introduceBound = person.introduce.bind(person);
console.log(introduceBound());
```

## Task 10: Using call() to Invoke a Function with Different Contexts
```javascript
function introduce() {
    return `Hi, my name is ${this.name}`;
}
const person1 = { name: "Alice" };
const person2 = { name: "Bob" };
console.log(introduce.call(person1));
console.log(introduce.call(person2));
```

## Task 11: Using apply() to Pass Arguments with Context
```javascript
function sum(a, b) {
    return (a + b) * this.multiplier;
}
const context1 = { multiplier: 2 };
const context2 = { multiplier: 3 };
console.log(sum.apply(context1, [4, 5]));
console.log(sum.apply(context2, [3, 7]));
```

## Task 12: Async-Await with Promise.all
```javascript
async function fetchAllData() {
    const [user, posts] = await Promise.all([fetchUser(), fetchPosts()]);
    console.log(user);
    console.log(posts);
}
```

## Task 13: Creating a Simple Generator
```javascript
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}
```

## Task 14: Create a Custom Iterator
```javascript
function rangeIterator(start, end) {
    let current = start;
    return {
        next() {
            if (current <= end) {
                return { value: current++, done: false };
            } else {
                return { done: true };
            }
        }
    };
}
```

## Task 15: Generator Function for Fibonacci Sequence
```javascript
function* fibonacciGenerator() {
    let a = 1, b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}
