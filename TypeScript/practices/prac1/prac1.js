"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Instructor {
    id;
    name;
    department;
    salary;
    coursesTaught;
    constructor(
    // constructor shorthand
    id, name, department, salary, coursesTaught) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
        this.coursesTaught = coursesTaught;
    }
}
const course1 = {
    courseName: "Introduction to C Programming",
    courseCode: "CSE103",
    credits: 4,
    status: "upcoming"
};
const course2 = {
    courseName: "Data Structures and Algorithms",
    courseCode: "CSE246",
    credits: 4,
    status: "ongoing"
}; //as ICourse; // Type assertion
const student1 = {
    id: 367,
    name: "Gazi Taoshif",
    department: "Computer Science & Engineering",
    courses: [course1, course2],
    isEnrolled: true
};
const student2 = {
    id: 487,
    name: "Mahafuza Moon",
    department: "Computer Science & Engineering",
    courses: [course1],
    isEnrolled: true
};
const instructor1 = new Instructor(1, "Dr. Abdur Smith", "Computer Science & Engineering", 75000, [course1, course2]);
const admin1 = {
    id: 1,
    name: "Taoshif",
    department: "CSE",
    courses: [course1],
    isEnrolled: true,
    adminRole: "CR"
};
// console.log("Student 1: ", student1);
// console.log("Student 2: ", student2);
// console.log("Instructor 1: ", instructor1);
function printStudentInfo(student) {
    return `Student: ${student.id} - Name: ${student.name} in ${student.department} department`;
}
function enrollCourse(studentName, courses, semester) {
    if (semester && courses.length > 1) {
        return `${studentName} has enrolled in ${courses[0]} and ${courses[1]} for semester ${semester}.`;
    }
    return `${studentName} has enrolled in ${courses[0]}.`;
}
function calculateFee(credits, costPerCredit = 5500) {
    return credits * costPerCredit;
}
// console.log(printStudentInfo(student1));
// console.log(calculateFee(course1.credits));
// console.log(enrollCourse(student1.name, [course1.courseName, course2.courseName], "Fall 2024"));
function printDetails() {
    console.log(printStudentInfo(student1));
    console.log(enrollCourse(student1.name, [course1.courseName, course2.courseName], "Fall 2024"));
    console.log(calculateFee(course1.credits));
}
printDetails();
//# sourceMappingURL=prac1.js.map