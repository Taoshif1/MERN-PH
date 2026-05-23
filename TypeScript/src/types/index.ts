// string
// let firstName: string = "Taoshif";

// number
// let age: number = 21;

// boolean
// let isDeveloper: boolean = true;

// inference
// let country = "Bangladesh";

// null
// let emptyValue: null = null;

// undefined
// let notAssigned: undefined = undefined;

// Unions
// type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;


// console.log(firstName);
// console.log(age);
// console.log(isDeveloper);
// console.log(country);
// console.log(emptyValue);
// console.log(notAssigned);
// console.log("Unions: ", 1, 3, 5, 7, 9);

interface User {
    id: number;
    name: string;
    isStudent: boolean;
}

// const user: User = {
//     id: 1,
//     name: "Gazi Taoshif",
//     isStudent: true
// };

class UserAccount {
    //! We do NOT need to declare fields up here anymore
    // name: string;
    // id: number;
    // isStudent: boolean;

    constructor(
        // This is a modern shorthand for declaring & initializing the fields
                public name: string,    
                public id: number,
                public isStudent: boolean) {
        // this.name = name;
        // this.id = id;
        // this.isStudent = isStudent;

    }
}

// console.log('User Info: ', user);

const user1: User = new UserAccount("Gazi Taoshif", 1, true);
const user2: User = new UserAccount("Mahafuza Moon", 2, true);

console.log(user1.id, user1.name, user1.isStudent);
console.log(user2.id, user2.name, user2.isStudent);
