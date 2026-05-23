"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function genericFunc(arg) {
    return arg;
}
const result1 = genericFunc("Hello, World!");
const result2 = genericFunc(42);
const result3 = genericFunc(true);
console.log(result1); // Output: Hello, World!
console.log(result2); // Output: 42
console.log(result3); // Output: true
function getFirstElement(arg) {
    return arg[0];
}
const firstString = getFirstElement(["apple", "banana", "cherry"]);
const firstNumber = getFirstElement([1, 2, 3, 4, 5]);
const firstBoolean = getFirstElement([true, false, true]);
console.log(firstString); // Output: apple
console.log(firstNumber); // Output: 1
console.log(firstBoolean); // Output: true
//# sourceMappingURL=generics.js.map