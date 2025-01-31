# JavaScript Functions - Questions & Solutions


## 1. `stringToNumber` Function

### **Description:**
Converts a string to a number. If conversion fails, returns "Not a number".

### **Solution:**
```javascript
function stringToNumber(str) {
    const num = Number(str);
    return isNaN(num) ? "Not a number" : num;
}

// Example usage:
console.log(stringToNumber("123"));    // 123
console.log(stringToNumber("12.34"));  // 12.34
console.log(stringToNumber("abc"));    // "Not a number"
console.log(stringToNumber("0x10"));   // 16
console.log(stringToNumber(""));       // 0
```

---

## 2. `flipBoolean` Function

### **Description:**
Converts any input to its boolean equivalent and flips it.

### **Solution:**
```javascript
function flipBoolean(value) {
    return !Boolean(value);
}

// Example usage:
console.log(flipBoolean(true));     // false
console.log(flipBoolean(false));    // true
console.log(flipBoolean(1));        // false
console.log(flipBoolean(0));        // true
console.log(flipBoolean("hello"));  // false
console.log(flipBoolean(""));       // true
console.log(flipBoolean(null));     // true
console.log(flipBoolean(undefined));// true
```

---

## 3. `whatAmI` Function

### **Description:**
Returns a string describing the type of the given input.

### **Solution:**
```javascript
function whatAmI(value) {
    if (typeof value === "number") {
        return "I'm a number!";
    } else if (typeof value === "string") {
        return "I'm a string!";
    } else if (typeof value === "boolean") {
        return "I'm a boolean!";
    } else if (typeof value === "object") {
        return "I'm an object!";
    } else if (typeof value === "undefined") {
        return "I'm undefined!";
    } else if (typeof value === "function") {
        return "I'm a function!";
    } else {
        return "I don't know what I am!";
    }
}

// Example usage:
console.log(whatAmI(42));         // "I'm a number!"
console.log(whatAmI("Hello"));    // "I'm a string!"
console.log(whatAmI(true));       // "I'm a boolean!"
console.log(whatAmI(null));       // "I'm an object!"
console.log(whatAmI(undefined));  // "I'm undefined!"
```

---

## 4. `isItTruthy` Function

### **Description:**
Checks whether a value is truthy or falsy in JavaScript.

### **Solution:**
```javascript
function isItTruthy(value) {
    return value ? "It's truthy!" : "It's falsey!";
}

// Example usage:
console.log(isItTruthy(true));        // "It's truthy!"
console.log(isItTruthy(false));       // "It's falsey!"
console.log(isItTruthy(1));           // "It's truthy!"
console.log(isItTruthy(0));           // "It's falsey!"
console.log(isItTruthy("hello"));     // "It's truthy!"
console.log(isItTruthy(""));          // "It's falsey!"
console.log(isItTruthy(null));        // "It's falsey!"
console.log(isItTruthy(undefined));   // "It's falsey!"
console.log(isItTruthy([]));          // "It's truthy!"
console.log(isItTruthy({}));          // "It's truthy!"
```

---


