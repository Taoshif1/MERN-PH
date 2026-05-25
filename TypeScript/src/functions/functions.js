"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Function Type Expressions
function greeter(fn) {
    fn("Hello, World");
}
function printToConsole(s) {
    console.log(s);
}
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;
const doSomething = (num) => {
    return num > 10;
};
doSomething.description = "Checks if number is greater than 10";
class UserAccount {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
function createInstance(ClassName, name, age) {
    return new ClassName(name, age);
}
const user = createInstance(UserAccount, "Gazi Taoshif", 21);
// console.log(user); // UserAccount { name: 'Gazi Taoshif', age: 21 }
// 4. Generic Functions & Inference
// <T> captures the type dynamically
function cloneArray(arr) {
    return [...arr];
}
// Inference: TypeScript automatically knows arrays are string[] or number[]
const stringArray = cloneArray(["a", "b", "c"]); // T is Inferred as string[]
const numberArray = cloneArray([1, 2, 3]); // T is Inferred as number[]
const nameArray = cloneArray(["Taoshif", "Moon", "Reza"]); // T is Inferred as string[]
const mixedArray = cloneArray([1, "two", true]); // T is Inferred as (string | number | boolean)[]
// T must be an object/array that has a .length property
function logLength(item) {
    console.log(`Length is: ${item.length}`);
}
// logLength("Hello World"); // Safe! Strings have a .length property
// logLength([1, 2, 3]);     // Safe! Arrays have a .length property
// logLength(42);         // Error: number does not have a .length property
// logLength({ length: 10, name: "Test Object" }); // Safe! This object has a .length property
// 6. Specifying Type Arguments
//! While inference works 90% of the time, sometimes you must explicitly declare the type in angle brackets <> because multiple diverse types are combined.
function combineArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
// const mixed = combineArrays([1, 2], ["hello"]); // Error: number array doesn't match string array
const mixed = combineArrays([1, 2], ["hello"]); // Safe explicit override!
// console.log(mixed); // [1, 2, "hello"]
// 7. Optional Parameters & Optional Parameters in Callbacks
function greetUser(name, title) {
    if (title)
        return `Hello, ${title} ${name}`;
    return `Hello, ${name}`;
}
// console.log(greetUser("Gazi Taoshif")); // "Hello, Gazi Taoshif"
// console.log(greetUser("Gazi Taoshif", "Mr.")); // "Hello, Mr. Gazi Taoshif"
function processItems(items, callback) {
    items.forEach((item, index) => {
        callback(item, index);
    });
}
processItems(["apple", "banana", "cherry"], (item, index) => {
    // console.log(`Item ${index}: ${item}`);
});
// 8.2. THE IMPLEMENTATION SIGNATURE (Has the code block + satisfies all overloads)
function makeDate(mOrTimestamp, d, y) {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    }
    else {
        return new Date(mOrTimestamp);
    }
}
// console.log(makeDate(1609459200000)); 
// console.log(makeDate(0, 1, 2020));
// 9. Rest Parameters 
function sumNumbers(name, ...numbers) {
    const total = numbers.reduce((sum, num) => sum + num, 0);
    return `${name} calculated total: ${total}`;
}
function renderWidget({ a, b, c }) {
    // console.log(`Properties are: ${a}, ${b}, ${c}`);
}
renderWidget({ a: 10, b: "Hello", c: true });
function createUser(name, age = 18) {
    return { name, age };
}
// console.log(createUser("Gazi Taoshif")); // { name: "Gazi Taoshif", age: 18 }
// console.log(createUser("Gazi Taoshif", 21)); // { name: "Gazi Taoshif", age: 21 }
// 11. Other Core Types to Know About
// Void, Object, Never, Unknown
function logMessage(msg) {
    console.log(msg);
}
function createRecord(obj) {
    console.log("Record Created Successfully:", obj);
}
function processInput(input) {
    // input.toUpperCase(); // Error: Object is of type 'unknown'
    if (typeof input === "string") {
        return input.toUpperCase(); // Safe after narrowing!
    }
}
function throwError(message) {
    throw new Error(`Error: ${message}`);
}
logMessage("This is a log message");
createRecord({ id: 1, name: "Test Record" });
console.log(processInput("hello world")); // Output: "HELLO WORLD"
try {
    throwError("Something went wrong");
}
catch (error) {
    if (error instanceof Error) {
        console.log(`Safely caught the error: ${error.message}`);
    }
}
console.log("Program finished running successfully!");
