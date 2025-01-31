# Task: Mathematical Operations on Variables

## Question

Perform the following mathematical operations on the provided variables `a` and `b`:

1. **Addition**: Add `a` and `b`.
2. **Subtraction**: Subtract the smaller value from the larger one.
3. **Multiplication**: Multiply `a` and `b`.
4. **Division**: Divide the larger value by the smaller one.
5. **Increment**: Increase the value of `a` by 1.
6. **Decrement**: Decrease the value of `b` by 1.
7. **Reminder**: Find the remainder when the larger value is divided by the smaller one.

**Note**: Do not change the values of `a` and `b`.

### Provided Variables

- `a = 18`
- `b = 24`

## Solution

```javascript
// Provided values
const a = 18;
const b = 24;

// Addition of two values
function add() {
    return a + b;
}

// Subtract small value from larger one
function subtract() {
    return a > b ? a - b : b - a;
}

// Multiply two values
function multiply() {
    return a * b;
}

// Divide larger value by small
function divide() {
    return a > b ? a / b : b / a;
}

// Increase value of a by 1
function increment() {
    return a + 1;
}

// Decrease value of b by 1
function decrement() {
    return b - 1;
}

// Divide larger value by small to find the reminder
function reminder() {
    return a > b ? a % b : b % a;
}
