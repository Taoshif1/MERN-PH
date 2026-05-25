// ==========================================
// SYSTEM CONFIGURATIONS & TYPE DEFINITIONS
// ==========================================

enum CourseLevel {
    Beginner = "Beginner",
    Intermediate = "Intermediate",
    Advanced = "Advanced"
}

type CourseBasicInfo = readonly [
    courseId: string,
    courseName: string,
    isPublished: boolean
];

interface ICourse {
    id: string;
    title: string;
    instructor: string;
    students: string[];
    level: CourseLevel;
}

type PriceCalculator = (price: number, tax: number) => number;

// ==========================================
// UTILITY & MANAGEMENT FUNCTIONS
// ==========================================

function cloneData<T>(data: T[]): T[] {
    return [...data];
}

function printItemLength<T extends { length: number }>(item: T): void {
    console.log(`📏 Length of item: ${item.length}`);
}

const calculatePrice: PriceCalculator = (price, tax) => {
    return price + tax;
};

function enrollStudents(courseName: string, ...students: string[]): void {
    console.log(`➕ Enrolling students in ${courseName}:`, students);
}

// Function Overloads
function searchCourse(id: number): ICourse | null;
function searchCourse(title: string): ICourse | null;

// Implementation Signature
function searchCourse(value: number | string): ICourse | null {
    const dummyCourse: ICourse = {
        id: "CSE103",
        title: "Intro to C Programming",
        instructor: "Dr. Ahmed",
        students: ["Alice", "Bob", "Charlie"],
        level: CourseLevel.Beginner
    };

    if (typeof value === "number") {
        console.log(`🔍 Searching by numeric ID: ${value}`);
    } else {
        console.log(`🔍 Searching by title: "${value}"`);
    }

    return dummyCourse;
}

function safeParser(data: unknown): void {
    if (typeof data === "string") {
        console.log(`🔤 Parsed String: ${data.toUpperCase()}`);
    } else if (typeof data === "number") {
        console.log(`🔢 Parsed Number: ${data.toFixed(2)}`);
    } else {
        console.log("⚠️ Unsupported data type provided");
    }
}

async function fetchCourses(): Promise<ICourse[]> {
    return [
        {
            id: "CSE103",
            title: "Intro to C Programming",
            instructor: "Dr. Ahmed",
            students: ["Alice", "Bob", "Charlie"],
            level: CourseLevel.Beginner
        },
        {
            id: "CSE246",
            title: "Data Structures",
            instructor: "Dr. Rahman",
            students: ["David", "Eve"],
            level: CourseLevel.Intermediate
        }
    ];
}

// ==========================================
//  EXECUTION & LIFECYCLE RUNNER
// ==========================================

async function runSystem() {
    console.log("--- 🏁 STARTING COURSE SYSTEM --- \n");

    // 1️⃣ Tuple Usage
    const courseInfo: CourseBasicInfo = [
        "CSE106",
        "Introduction to Discrete Mathematics",
        true
    ];
    console.log("📘 Course Basic Info:", courseInfo);

    // 2️⃣ Generic Function Usage
    const clonedCourses = cloneData(["CSE103", "CSE246", "CSE220"]);
    console.log("📂 Cloned Course Array:", clonedCourses);

    // 3️⃣ Generic Constraint Usage
    printItemLength("TypeScript");
    printItemLength([1, 2, 3, 4, 5]);

    // 4️⃣ Function Type Expression Usage
    const finalPrice = calculatePrice(5000, 500);
    console.log("💰 Final Course Price Tag:", finalPrice);

    // 5️⃣ Rest Parameters Usage
    enrollStudents("Data Structures", "Taoshif", "Moon", "Reza");

    // 6️⃣ Function Overloads Usage
    const courseById = searchCourse(101);
    console.log("✨ ID Search Result Level:", courseById?.level);

    const courseByTitle = searchCourse("Intro to C Programming");
    console.log("✨ Title Search Result Level:", courseByTitle?.level);

    // 7️⃣ Unknown Narrowing Usage
    safeParser("hello typescript");
    safeParser(99.456);
    safeParser(true);

    // 8️⃣ Async Function Handling
    console.log("\n🌐 Fetching operational dashboard records...");
    const courses = await fetchCourses();
    console.log("✅ Courses Loaded Successfully:");

    courses.forEach((course) => {
        console.log(`
  📚 ${course.title} (${course.id})
  👨‍🏫 Instructor: ${course.instructor}
  🎯 Level: ${course.level}
  👥 Enrolled Students: ${course.students.join(", ")}
        `);
    });
    
    console.log("--- 🔚 SYSTEM TASKS COMPLETE ---");
}

// Run the core mini system application wrapper
runSystem();
