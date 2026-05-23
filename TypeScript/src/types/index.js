"use strict";
// string
// let firstName: string = "Taoshif";
Object.defineProperty(exports, "__esModule", { value: true });
// const user: User = {
//     id: 1,
//     name: "Gazi Taoshif",
//     isStudent: true
// };
class UserAccount {
    name;
    id;
    isStudent;
    //! We do NOT need to declare fields up here anymore
    // name: string;
    // id: number;
    // isStudent: boolean;
    constructor(
    // This is a modern shorthand for declaring & initializing the fields
    name, id, isStudent) {
        // this.name = name;
        // this.id = id;
        // this.isStudent = isStudent;
        this.name = name;
        this.id = id;
        this.isStudent = isStudent;
    }
}
// console.log('User Info: ', user);
const user1 = new UserAccount("Gazi Taoshif", 1, true);
const user2 = new UserAccount("Mahafuza Moon", 2, true);
console.log(user1.id, user1.name, user1.isStudent);
console.log(user2.id, user2.name, user2.isStudent);
