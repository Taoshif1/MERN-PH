"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const c1 = { title: "Next.js Backend" };
const c2 = { title: "React Native", maxStudents: 50 };
const user1 = {
    id: 123,
    name: "Taoshif",
};
const user2 = {
    id: 124,
    name: "Moon",
    email: "moon@gmail.com"
};
const userDoc = {
    _id: "65f210a4b",
    username: "taoshif"
};
userDoc.username = "gazi taoshif"; // Allowed
const product1 = {
    id: 1,
    name: "Laptop"
};
const examResults = {
    "Taoshif": 95,
    "Moon": 98,
    "Reza": 88
};
const errors = {
    email: "Invalid email",
    password: "Too short"
};
const product2 = {
    id: 2,
    name: "Smartphone",
    premium: true
};
const admin1 = {
    id: 125,
    name: "Taoshif Gazi",
    isCR: true
};
const admin2 = {
    id: admin1.id + 1,
    name: "Mahafuza Moon",
    email: "mahafuzamoon@gmail.com",
    isCR: false
};
const response = {
    success: true,
    data: ["React", "TS"]
};
const user = ["Taoshif", 21];
console.log(user);
