
interface ICourseConfig {
    title: string;
    maxStudents?: number; 
}

const c1: ICourseConfig = { title: "Next.js Backend" };
const c2: ICourseConfig = { title: "React Native", maxStudents: 50 };

interface IUser {
    id: number;
    name: string;
    email?: string;
}

const user1: IUser = {
    id: 123,
    name: "Taoshif",
}

const user2: IUser = {
    id: 124,
    name: "Moon",
    email: "moon@gmail.com"
}

// console.log(user1);
// console.log(user2);

interface MongoDBDoc {
    readonly _id: string;
    username: string;
}

const userDoc: MongoDBDoc = {
    _id: "65f210a4b",
    username: "taoshif"
};

userDoc.username = "gazi taoshif"; // Allowed
// userDoc._id = "new_id";          // Error: Cannot assign to '_id' because it is a read-only property.


interface Product {
    readonly id: number;
    name: string;
}

const product1: Product = {
    id: 1,
    name: "Laptop"
};

// product1.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.
// product1.name = "Gaming Laptop"; // Allowed: 'name' is not read-only

// console.log(product1);

interface StudentGrades {
    [studentName: string]: number; // Key must be a string, value must be a number
}

const examResults: StudentGrades = {
    "Taoshif": 95,
    "Moon": 98,
    "Reza": 88
};

// console.log(examResults);

interface IErrorMessage{
    [key: string]: string;
}

const errors: IErrorMessage = {
    email: "Invalid email",
    password: "Too short"
};

// console.log(errors);

interface IProductWithPremium extends Product {
    premium: boolean;
}

const product2: IProductWithPremium = {
    id: 2,
    name: "Smartphone",
    premium: true
};

// console.log(product2);

interface IClassRepresentative {
    isCR: boolean;
}

type IAdmin = IClassRepresentative & IUser;

const admin1: IAdmin = {
    id: 125,
    name: "Taoshif Gazi",
    isCR: true
};
const admin2: IAdmin = {
    id: admin1.id + 1,
    name: "Mahafuza Moon",
    email: "mahafuzamoon@gmail.com",
    isCR: false
};

// console.log(admin1);
// console.log(admin2);


interface ApiResponse<T> {
    success: boolean;
    data: T;
}

const response: ApiResponse<string[]> = {
    success: true,
    data: ["React", "TS"]
};

// console.log(response);


type UserInfo = [string, number];

const user: UserInfo = ["Taoshif", 21];

console.log(user);