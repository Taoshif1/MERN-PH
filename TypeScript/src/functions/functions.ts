// 1. Function Type Expressions
function greeter(fn: (a: string) => void) {
    fn("Hello, World");
}

function printToConsole(s: string) {
    console.log(s);
}

// type GreetFunction = (a: string) => void;
// function greeter(fn: GreetFunction) {
//   // ...
// }

// greeter(printToConsole);

//! The simplest way to describe a function type. It looks just like an ES6 arrow function.
type MathOperator = (a: number, b: number) => number;

const add: MathOperator = (x, y) => x + y;
const subtract: MathOperator = (x, y) => x - y;
const multiply: MathOperator = (x, y) => x * y;
const divide: MathOperator = (x, y) => x / y;

// console.log(add(10, 5)); // 15
// console.log(subtract(10, 5)); // 5
// console.log(multiply(10, 5)); // 50
// console.log(divide(10, 5)); // 2


// 2. Call Signatures
type DescribableFunction = {
    description: string;          // A standard object property
    (arg: number): boolean;       // The call signature (Notice the colon ':' instead of '=>')
};

const doSomething: DescribableFunction = (num: number) => {
    return num > 10;
};
doSomething.description = "Checks if number is greater than 10";

// console.log(doSomething(5)); // false
// console.log(doSomething(15)); // true
// console.log(doSomething.description); // "Checks if number is greater than 10"


// 3. Construct Signatures
interface IUserConstructor {
    new(name: string, age: number): Object;
}

class UserAccount {
    constructor(public name: string, public age: number) { }
}

function createInstance(ClassName: IUserConstructor, name: string, age: number) {
    return new ClassName(name, age);
}

const user = createInstance(UserAccount, "Gazi Taoshif", 21);
// console.log(user); // UserAccount { name: 'Gazi Taoshif', age: 21 }


// 4. Generic Functions & Inference
// <T> captures the type dynamically
function cloneArray<T>(arr: T[]): T[] {
    return [...arr]
}

// Inference: TypeScript automatically knows arrays are string[] or number[]
const stringArray = cloneArray(["a", "b", "c"]); // T is Inferred as string[]
const numberArray = cloneArray([1, 2, 3]); // T is Inferred as number[]
const nameArray = cloneArray(["Taoshif", "Moon", "Reza"]); // T is Inferred as string[]
const mixedArray = cloneArray([1, "two", true]); // T is Inferred as (string | number | boolean)[]

// console.log(stringArray); // ["a", "b", "c"]
// console.log(numberArray); // [1, 2, 3]
// console.log(nameArray); // ["Taoshif", "Moon", "Reza"]
// console.log(mixedArray); // [1, "two", true]


// 5. Generic Constraints & Working with Constrained Values
interface HasLength {
    length: number;
}

// T must be an object/array that has a .length property
function logLength<T extends HasLength>(item: T): void {
    console.log(`Length is: ${item.length}`);
}

// logLength("Hello World"); // Safe! Strings have a .length property
// logLength([1, 2, 3]);     // Safe! Arrays have a .length property
// logLength(42);         // Error: number does not have a .length property
// logLength({ length: 10, name: "Test Object" }); // Safe! This object has a .length property


// 6. Specifying Type Arguments
//! While inference works 90% of the time, sometimes you must explicitly declare the type in angle brackets <> because multiple diverse types are combined.
function combineArrays<T>(arr1: T[], arr2: T[]): T[] {
    return arr1.concat(arr2);
}

// const mixed = combineArrays([1, 2], ["hello"]); // Error: number array doesn't match string array
const mixed = combineArrays<number | string>([1, 2], ["hello"]); // Safe explicit override!
// console.log(mixed); // [1, 2, "hello"]


// 7. Optional Parameters & Optional Parameters in Callbacks
function greetUser(name: string, title?: string) {
    if (title) return `Hello, ${title} ${name}`;
    return `Hello, ${name}`;
}
// console.log(greetUser("Gazi Taoshif")); // "Hello, Gazi Taoshif"
// console.log(greetUser("Gazi Taoshif", "Mr.")); // "Hello, Mr. Gazi Taoshif"

function processItems(items: string[], callback: (item: string, index: number) => void) {
    items.forEach((item, index) => {
        callback(item, index);
    });
}
processItems(["apple", "banana", "cherry"], (item, index) => {
    // console.log(`Item ${index}: ${item}`);
});


// 8. Function Overloads & Implementation Signatures
// 8.1. OVERLOAD SIGNATURES (No function body, just types)
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;

// 8.2. THE IMPLEMENTATION SIGNATURE (Has the code block + satisfies all overloads)
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    } else {
        return new Date(mOrTimestamp);
    }
}

// console.log(makeDate(1609459200000)); 
// console.log(makeDate(0, 1, 2020));


// 9. Rest Parameters 
function sumNumbers(name: string, ...numbers: number[]): string {
    const total = numbers.reduce((sum, num) => sum + num, 0);
    return `${name} calculated total: ${total}`;
}

// console.log(sumNumbers("Gazi Taoshif", 1, 2, 3, 4)); // "Gazi Taoshif calculated total: 10"


// 10. Parameter Destructuring & Default Parameters
type WidgetProps = { a: number; b: string; c: boolean };

function renderWidget({ a, b, c }: WidgetProps): void {
    // console.log(`Properties are: ${a}, ${b}, ${c}`);
}
renderWidget({ a: 10, b: "Hello", c: true });

function createUser(name: string, age: number = 18): { name: string; age: number } {
    return { name, age };
}
// console.log(createUser("Gazi Taoshif")); // { name: "Gazi Taoshif", age: 18 }
// console.log(createUser("Gazi Taoshif", 21)); // { name: "Gazi Taoshif", age: 21 }


// 11. Other Core Types to Know About
// Void, Object, Never, Unknown
function logMessage(msg: string): void {
    console.log(msg);
}

function createRecord(obj: object) {
    console.log("Record Created Successfully:", obj);
}

function processInput(input: unknown) {
    // input.toUpperCase(); // Error: Object is of type 'unknown'
    if (typeof input === "string") {
        return input.toUpperCase(); // Safe after narrowing!
    }
}

function throwError(message: string): never {
    throw new Error(`Error: ${message}`);
}

logMessage("This is a log message");

createRecord({ id: 1, name: "Test Record" });

console.log(processInput("hello world")); // Output: "HELLO WORLD"

try {
    throwError("Something went wrong");
} catch (error) {
    if (error instanceof Error) {
        console.log(`Safely caught the error: ${error.message}`);
    }
}

console.log("Program finished running successfully!");



