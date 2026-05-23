
type CourseStatus = "ongoing" | "completed" | "upcoming";
type AdminRole = {
    adminRole: string;
}
type AdminStudent = IStudent & AdminRole; // Intersection type

interface ICourse {
    courseName: string;
    courseCode: string;
    credits: number;
    status: CourseStatus;
}

interface IStudent {
    id: number;
    name: string;
    department: string;
    courses: ICourse[];
    isEnrolled: boolean;
}

class Instructor {

    constructor(
        // constructor shorthand
        public id: number,
        public name: string,
        public department: string,
        public salary: number,
        public coursesTaught: ICourse[]
    ) { }
}

const course1: ICourse = {
    courseName: "Introduction to C Programming",
    courseCode: "CSE103",
    credits: 4,
    status: "upcoming"
}

const course2: ICourse = {
    courseName: "Data Structures and Algorithms",
    courseCode: "CSE246",
    credits: 4,
    status: "ongoing"
} //as ICourse; // Type assertion

const student1: IStudent = {
    id: 367,
    name: "Gazi Taoshif",
    department: "Computer Science & Engineering",
    courses: [course1, course2],
    isEnrolled: true
}
const student2: IStudent = {
    id: 487,
    name: "Mahafuza Moon",
    department: "Computer Science & Engineering",
    courses: [course1],
    isEnrolled: true
}
const instructor1 = new Instructor(1, "Dr. Abdur Smith", "Computer Science & Engineering", 75000, [course1, course2]);

const admin1: AdminStudent = {
    id: 1,
    name: "Taoshif",
    department: "CSE",
    courses: [course1],
    isEnrolled: true,
    adminRole: "CR"
}

// console.log("Student 1: ", student1);
// console.log("Student 2: ", student2);
// console.log("Instructor 1: ", instructor1);

function printStudentInfo(student: IStudent): string {
    return `Student: ${student.id} - Name: ${student.name} in ${student.department} department`;
}

function enrollCourse(studentName: string, courses: string[], semester?: number | string): string {
    if (semester && courses.length > 1) {
        return `${studentName} has enrolled in ${courses[0]} and ${courses[1]} for semester ${semester}.`;
    }
    return `${studentName} has enrolled in ${courses[0]}.`;
}

function calculateFee(credits: number, costPerCredit: number = 5500): number {
    return credits * costPerCredit;
}

// console.log(printStudentInfo(student1));
// console.log(calculateFee(course1.credits));
// console.log(enrollCourse(student1.name, [course1.courseName, course2.courseName], "Fall 2024"));

function printDetails(): void {
    console.log(printStudentInfo(student1));
    console.log(enrollCourse(student1.name, [course1.courseName, course2.courseName], "Fall 2024"));
    console.log(calculateFee(course1.credits));
}

printDetails();