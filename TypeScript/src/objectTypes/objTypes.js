"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user1 = {
    id: 123,
    name: "Taoshif",
};
const user2 = {
    id: 124,
    name: "Moon",
    email: "moon@gmail.com"
};
const product1 = {
    id: 1,
    name: "Laptop"
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
