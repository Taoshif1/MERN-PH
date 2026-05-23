"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1️⃣ Type Guards & Type Narrowing
function formatValue(value) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else {
        return value.toFixed(2);
    }
}
// console.log(formatValue("hello"));
// console.log(formatValue(123.456));
// 2️⃣ Truthiness Narrowing
function printMessage(message) {
    if (message) {
        console.log(message.toUpperCase());
    }
    else {
        console.log("No message provided.");
    }
}
// printMessage("Hello, TypeScript!");
// printMessage(null);
// 3️⃣ instanceof Narrowing
class Dog {
    bark() {
        console.log("Bark bark!");
    }
}
class Cat {
    meow() {
        console.log("Meow meow!");
    }
}
function makeSound(animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
const dog = new Dog();
const cat = new Cat();
makeSound(dog);
makeSound(cat);
