
function genericFunc<T>(arg: T): T | undefined {
    return arg;
}

const result1 = genericFunc<string>("Hello, World!");
const result2 = genericFunc<number>(42);
const result3 = genericFunc<boolean>(true);

console.log(result1);   // Output: Hello, World!
console.log(result2);   // Output: 42
console.log(result3);   // Output: true

function getFirstElement<T>(arg: T[]): T | undefined {
    return arg[0];
}

const firstString = getFirstElement(["apple", "banana", "cherry"]);
const firstNumber = getFirstElement([1, 2, 3, 4, 5]);
const firstBoolean = getFirstElement([true, false, true]);

console.log(firstString);   // Output: apple
console.log(firstNumber);   // Output: 1
console.log(firstBoolean);  // Output: true