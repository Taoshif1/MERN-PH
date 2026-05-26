// ==========================================
//  TYPE DEFINITIONS
// ==========================================

type EmployeeRole =
    | "Manager"
    | "Admin"
    | "Developer";

interface IEmployee {
    readonly id: number;
    role: EmployeeRole;
    phone?: string;
}

interface IManager extends IEmployee {
    department: string;
}

interface IPermission {
    permissions: string[];
}

type Admin = IManager & IPermission;

// ==========================================
//  GENERIC API RESPONSE
// ==========================================

interface ApiResponse<T> {
    success: boolean;
    data: T;
}

const techResponse: ApiResponse<string[]> = {
    success: true,
    data: ["React", "TypeScript"]
};

// ==========================================
//  READONLY ARRAY
// ==========================================

const technologies: ReadonlyArray<string> = [
    "React",
    "Vue",
    "Angular"
];

console.log("💻 Technologies:", technologies);

// ==========================================
//  EMPLOYEE OBJECTS
// ==========================================

const manager1: IManager = {
    id: 1,
    role: "Manager",
    department: "Frontend",
    phone: "+8801712345678"
};

const admin1: Admin = {
    id: 2,
    role: "Admin",
    department: "Infrastructure",
    permissions: ["read", "write", "delete"],
    phone: "+8801812345678"
};

// ==========================================
//  API RESPONSE WITH EMPLOYEES
// ==========================================

const employeeResponse: ApiResponse<IEmployee[]> = {
    success: true,
    data: [manager1, admin1]
};

// ==========================================
//  GENERIC CLONE FUNCTION
// ==========================================

function cloneEmployees<T>(employees: T[]): T[] {
    return [...employees];
}

const clonedEmployees = cloneEmployees(employeeResponse.data);

console.log("📂 Cloned Employees:", clonedEmployees);

// ==========================================
//  GENERIC CONSTRAINTS
// ==========================================

function printLength<T extends { length: number }>(
    item: T
): void {
    console.log(`📏 Length: ${item.length}`);
}

printLength("TypeScript");
printLength([1, 2, 3]);

// ==========================================
//  READONLY TUPLES
// ==========================================

const employeeInfo:
    readonly [number, string, string?] = [
        101,
        "Taoshif Gazi",
        "+8801912345678"
    ];

const [
    empId,
    empName,
    empPhone
] = employeeInfo;

console.log(
    `👤 Employee ID: ${empId}, Name: ${empName}, Phone: ${empPhone ?? "N/A"}`
);

// ==========================================
//  UNKNOWN TYPE NARROWING
// ==========================================

function safeParser(data: unknown): void {

    if (typeof data === "string") {

        console.log(
            `🔤 Uppercase String: ${data.toUpperCase()}`
        );

    } else if (typeof data === "number") {

        console.log(
            `🔢 Fixed Number: ${data.toFixed(2)}`
        );

    } else {

        console.log("⚠️ Unsupported Type");
    }
}

safeParser("enterprise");
safeParser(99.456);
safeParser(true);

// ==========================================
//  ASYNC TYPESCRIPT
// ==========================================

async function fetchEmployees():
    Promise<ApiResponse<IEmployee[]>> {

    return {
        success: true,
        data: [manager1, admin1]
    };
}

// ==========================================
//  SYSTEM RUNNER
// ==========================================

async function runSystem() {

    console.log(
        "\n🚀 Loading Enterprise Dashboard...\n"
    );

    const response = await fetchEmployees();

    console.log("✅ Employees Loaded:\n");

    response.data.forEach((employee) => {

        console.log(`
👤 Employee ID: ${employee.id}
💼 Role: ${employee.role}
📱 Phone: ${employee.phone ?? "N/A"}
        `);
    });

    console.log("\n🎉 System Execution Complete");
}

runSystem();