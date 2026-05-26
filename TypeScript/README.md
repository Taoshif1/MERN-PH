# Learning TypeScript 🚀

As a developer transitioning from JavaScript & React, this repository serves as my structured notebook for mastering TypeScript. Here, I document how TypeScript provides compile time type safety, enhances developer velocity via IntelliSense & improves code scalability for modern Full Stack MERN applications.

---

## 📂 Project Structure

The workspace is organized using a root-level configuration strategy that manages nested practice modules, building compiled files side-by-side inside the `src/` directory.

```text
TypeScript/
├─ package.json         # Project dependencies, devTools & practice tools
├─ tsconfig.json        # Configured for strict mode & local folder compilation
└─ src/                 # Main source directory
   ├─ firstCode/        # Initial syntax verification scripts
   ├─ types/            # Structural type compatibility & type definitions
   ├─ objectTypes/      # Optional fields, index signatures & type intersections
   ├─ narrowing/        # Type guards, truthiness checks & OOP instance guarding
   ├─ tuples/           # Immutable arrays, optional fields, labels & rest elements
   ├─ functions/        # basic to advance functions
   └─ practices/
      ├─ prac1/         # Basic domain architecture layout practice
      ├─ advanceTypes/  # Utility types (Partial, Pick), Enums & Async operations
      ├─ funcPrac/      # Implemented a mini course system using all types of functions
      └─ generics/      # Reusable functions & strict array index lookups
```

---

## ⚙️ Environment Configuration

### Custom `tsconfig.json` Setup
The project runs under **Strict Mode** with configurations optimized to compile files directly inside their nested workspace directories.

```json
{
  "compilerOptions": {
    "rootDir": "./src",
    "module": "nodenext",
    "target": "esnext",
    "moduleResolution": "nodenext",
    "sourceMap": false,
    "declaration": false,
    "declarationMap": false,
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "skipLibCheck": true
  }
}
```

### Execution Commands

* **Run Any File Instantly (Development)**: Executes a specific TypeScript file directly in one step using the `tsx` runner without generating a separate `.js` file:

  ```bash
  npx tsx src/narrowing/index.ts
  ```

* **Compile a Specific File Individually**: Compiles a single file directly into its matching JavaScript version in its local folder:

  ```bash
  npx tsc src/narrowing/index.ts
  ```

* **Compile the Entire Project**: Triggers the compiler to scan your entire `src/` directory based on your `tsconfig.json` configurations and generate optimized vanilla JavaScript code next to each source file:

  ```bash
  npx tsc
  ```

* **Run the Compiled JavaScript File**: Executes the newly generated `.js` file using Node.js from your project root folder:

  ```bash
  node src/narrowing/index.js
  ```

---

## 🧠 Core Topics & Practice Files

### 1️⃣ Type Guarding & Narrowing (`src/narrowing/index.ts`)
Explored runtime conditional statements to distill wider primitive union types or runtime object instances into precise code execution blocks.

* **`typeof` Guards**: Safely formats variable properties depending on whether they arrive as a `string` or `number`.
* **Truthiness Narrowing**: Intercepts `null` or `undefined` states cleanly before executing string methods.
* **`instanceof` Guarding**: Accurately evaluates custom class definitions to route internal object methods securely.

```typescript
function formatValue(value: string | number) {
    if (typeof value === "string") {
        return value.toUpperCase(); // Inferred as string
    } else {
        return value.toFixed(2);    // Inferred as number
    }
}

class Dog { bark() { console.log("Bark bark!"); } }
class Cat { meow() { console.log("Meow meow!"); } }

function makeSound(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        animal.bark(); // Guarded instance verification
    } else {
        animal.meow();
    }
}
```

### 2️⃣ Generics (`src/practices/generics/generics.ts`)
Learned how to pass types as parameters to build highly reusable code structures. Managed array index safety edge cases under strict compiler constraints.

```typescript
// Generic identity mapping function
function genericFunc<T>(arg: T): T | undefined {
    return arg;
}

// Extracting safe indexes by constraining parameter signatures as arrays
function getFirstElement<T>(arg: T[]): T | undefined {
    return arg[0]; // Returns T or undefined if array is empty
}
```

### 3️⃣ Advanced Utilities & Async Operations (`src/practices/advanceTypes/advanceTypes.ts`)
Practiced combining domain boundaries (`Interfaces`) with modern utility types to handle asynchronous network data layers.

* **Enums**: Structured self-documenting semantic strings for status flags (`PaymentStatus`, `CourseStatus`).
* **`Partial<T>`**: Transforms all target properties to optional configurations—perfect for modeling Express.js backend `PATCH` requests.
* **`Pick<T, K>`**: Dynamically narrows complex schemas down into lean view-models to protect secure or heavy database properties.

```typescript
interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

// Partial mapping for clean profile updates
const userUpdate: Partial<User> = { email: "newemail@gmail.com" };

// Pick mapping for extracting public profiles safely
type UserPreview = Pick<User, "id" | "name">;

// Strongly-typed Promise handling runtime JSON fetch streams
async function fetchData(url: string): Promise<string[]> {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        if (error instanceof Error) console.error(error.message);
        return [];
    }
}
```

### 4️⃣ Rigid Tuples (`src/tuples/tuples.ts`)
Mastered fixed-size arrays, adding structural constraints to prevent standard JavaScript array mutation bugs.

* **`readonly` Modifiers**: Blocks index mutations like `.push()` from corrupting the intended tuple length.
* **Optional Elements**: Added optional tuple elements (`?`) to capture data parameters that may not always exist.
* **Labeled Tuples**: Added semantic property names directly into the type signature to produce rich tooltips in VS Code.

```typescript
// Fixed immutable layout
const studentData: readonly [number, string, boolean] = [1, "Gazi Taoshif", true];

// Optional and labeled elements for rich documentation
type ExamResults = [passed: boolean, student: string, score?: number];

// Indefinite lengths handling trailing dynamic array sequences
type SpreadsheetRow = [header: string, ...values: number[]];
```
---

### 5️⃣ Object Types & Structural Composition (`src/objectTypes/objTypes.ts`)
Practiced the complete suite of Object Type rules from the handbook to master structural mapping, mutability controls, and dynamic extensions.

* **Optional Fields (`?`)**: Allows objects to omit properties cleanly without throwing compiler validation flags.
* **`readonly` Bounds**: Hardens database model interfaces (like MongoDB documents) by freezing specific indices against modifications.
* **Index Signatures (`[key: string]`)**: Designs flexible lookup maps or payload containers for data fields whose property names are unknown ahead of time.
* **Type Extensions & Intersections (`extends` / `&`)**: Explored structural subclassing via interface extension and shape merging with structural type intersections.
* **Generic Data Layers (`ApiResponse<T>`)**: Developed adaptive wrapping signatures to cleanly encapsulate dynamic payloads across application contexts.

```typescript
// 1. Immutable Property Configurations
interface MongoDBDoc {
    readonly _id: string;
    username: string;
}

// 2. Index Signatures for Dynamic Maps
interface StudentGrades {
    [studentName: string]: number; 
}

// 3. Interface Inheritance 
interface Product {
    readonly id: number;
    name: string;
}
interface IProductWithPremium extends Product {
    premium: boolean;
}

// 4. Type Intersections (&)
interface IClassRepresentative { isCR: boolean; }
type IAdmin = IClassRepresentative & IUser;

// 5. Generic Responses
interface ApiResponse<T> {
    success: boolean;
    data: T;
}
const response: ApiResponse<string[]> = {
    success: true,
    data: ["React", "TS"]
};
```

---

## ⚡ Deep Dive: Mastering TypeScript Functions (`src/functions/functions.ts`)

Today, I explored everything about TypeScript function mechanics, signatures, overloads & generic execution scopes. This section captures how to structure functional programming logic, moving from simple arrow annotations to complex factory constructs & parameter states.

---

### 🧱 Comprehensive Syntax Breakdowns

#### 1️⃣ Function Type Expressions
The simplest approach to defining individual function shapes. It mirrors ES6 arrow functions directly.

```typescript
type MathOperator = (a: number, b: number) => number;

const add: MathOperator = (x, y) => x + y;
const subtract: MathOperator = (x, y) => x - y;
```

#### 2️⃣ Call Signatures
Since functions are native JavaScript objects, they can host custom metadata properties alongside executable logic. We write call signatures inside standard type objects using colons `:` instead of arrows `=>`.

```typescript
type DescribableFunction = {
    description: string;
    (arg: number): boolean; // The executable signature
};

const doSomething: DescribableFunction = (num) => num > 10;
doSomething.description = "Checks if number is greater than 10";
```

#### 3️⃣ Construct Signatures
Used to explicitly type functions that instantiate objects via the `new` operator. This advanced pattern enables object-oriented class factories.

```typescript
interface IUserConstructor {
    new(name: string, age: number): Object;
}

class UserAccount {
    constructor(public name: string, public age: number) { }
}

function createInstance(ClassName: IUserConstructor, name: string, age: number) {
    return new ClassName(name, age);
}
const user = createInstance(UserAccount, "Gazi Taoshif", 21);
```

#### 4️⃣ Generic Functions & Inference
Generics track dynamic variable inputs to guarantee that parameter shapes safely correlate directly with returned function outputs.

```typescript
function cloneArray<T>(arr: T[]): T[] {
    return [...arr];
}
// TypeScript dynamically infers the exact type arrays on execution
const nameArray = cloneArray(["Taoshif", "Moon", "Reza"]); // Inferred as string[]
const mixedArray = cloneArray([1, "two", true]);        // Inferred as (string | number | boolean)[]
```

#### 5️⃣ Generic Constraints (`extends`)
We can restrict a generic parameter's flexibility by binding it to structured interfaces using the `extends` keyword.

```typescript
interface HasLength { length: number; }

function logLength<T extends HasLength>(item: T): void {
    console.log(`Length is: ${item.length}`);
}
logLength("Hello World"); // Safe: strings have a length property
// logLength(42);         // Error: numbers do not have a length property
```

#### 6️⃣ Explicit Type Arguments
When combining disparate data array streams, automatic inference can stumble. We resolve this by providing explicit union types within angle brackets `<>`.

```typescript
function combineArrays<T>(arr1: T[], arr2: T[]): T[] {
    return arr1.concat(arr2);
}
const mixed = combineArrays<number | string>([1, 2], ["hello"]); // Safe explicit override
```

#### 7️⃣ Optional & Callback Parameters
Optional parameters appended with a `?` automatically resolve to include `| undefined` unions.

```typescript
function greetUser(name: string, title?: string) {
    if (title) return `Hello, ${title} ${name}`;
    return `Hello, ${name}`;
}
```

#### 8️⃣ Function Overloads
Enables a single function to support variable parameter lengths or unique, alternating type architectures. Overloads require writing individual **Overload Signatures** followed by a unified, final **Implementation Signature**.

```typescript
// Overload Signatures
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;

// Implementation Signature
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    } else {
        return new Date(mOrTimestamp);
    }
}
```

#### 9️⃣ Rest Parameters & Rest Arguments
Rest parameters pack unbounded individual method arguments safely down into a single typed array variable.

```typescript
function sumNumbers(name: string, ...numbers: number[]): string {
    const total = numbers.reduce((sum, num) => sum + num, 0);
    return `${name} calculated total: ${total}`;
}
```

#### 🔟 Parameter Destructuring & Default Variables
Unpacks object arguments directly into clean local scopes while tracking strict typing constraints inline.

```typescript
type WidgetProps = { a: number; b: string; c: boolean };

function renderWidget({ a, b, c }: WidgetProps): void {
    console.log(`Props are: ${a}, ${b}, ${c}`);
}

// Default assignment parameters act as implicit type declarations
function createUser(name: string, age: number = 18) {
    return { name, age };
}
```

---

### 🛡️ Specialized Typing Rules (`void`, `object`, `unknown`, `never`)

* **`void`**: Denotes that a function completes successfully but returns no explicit value.
* **`object`**: Matches any non-primitive data instance. It explicitly blocks strings, numbers, booleans, and symbols.
* **`unknown`**: The type-safe equivalent of `any`. It locks interaction access tightly until explicit validation guards check the data structure.
* **`never`**: Asserts that execution can **never finish** (e.g., throwing error exceptions or loops running infinitely).

```typescript
function logMessage(msg: string): void { console.log(msg); }

function createRecord(obj: object) { console.log("Created:", obj); }

function processInput(input: unknown) {
    if (typeof input === "string") return input.toUpperCase(); // Safe after type guard narrowing
}

function throwError(message: string): never {
    throw new Error(`Error: ${message}`); // Terminating never-state
}
```

---

## 📈 Key Architecture Takeaways

1. **Development-Time Bug Interception**: Caught missing parameters, faulty updates, and implicit bounds vulnerabilities directly inside the code editor before executing files in runtime environments.
2. **Structural Type Matching (Duck Typing)**: Understood that TypeScript matches objects based on their properties and shapes rather than focusing purely on explicit class assignments.
3. **Clean Folder Workspace Strategy**: Learned how to fine-tune compilation parameters to control the output of matching `.js`, `.d.ts`, and `.map` files across nested subdirectories.
4. **Ignored Return Assignments**: Learned that callback frameworks allowing a `void` return can ignore actual function evaluations (e.g., matching array arrow expressions like `() => array.push(x)` seamlessly).
5. **Defensive Error Catching**: Evaluated how `never` states throw exceptions that require standard runtime `try/catch` enclosures to preserve server thread survival.
6. **Clean Signatures over Factories**: Reevaluated object lifecycle processes, moving away from verbose boilerplate construct signatures toward direct object declarations using streamlined interfaces.

---
⭐ *Continuous updates as I expand my TypeScript skillset towards Full-Stack React Type integrations and database object modeling!*

---

## 📂 Actual Project Structure till now

```bash
TypeScript
├─ package-lock.json
├─ package.json
├─ README.md
├─ src
│  ├─ firstCode
│  │  ├─ index.d.ts
│  │  ├─ index.d.ts.map
│  │  ├─ index.js
│  │  ├─ index.js.map
│  │  └─ index.ts
│  ├─ functions
│  │  ├─ functions.js
│  │  └─ functions.ts
│  ├─ narrowing
│  │  ├─ index.js
│  │  └─ index.ts
│  ├─ objectTypes
│  │  ├─ objTypes.js
│  │  └─ objTypes.ts
│  ├─ practices
│  │  ├─ advanceTypes
│  │  │  ├─ advanceTypes.js
│  │  │  └─ advanceTypes.ts
│  │  ├─ funcPrac
│  │  │  ├─ courseSystem.js
│  │  │  └─ courseSystem.ts
│  │  ├─ generics
│  │  │  ├─ generics.d.ts
│  │  │  ├─ generics.d.ts.map
│  │  │  ├─ generics.js
│  │  │  ├─ generics.js.map
│  │  │  └─ generics.ts
│  │  └─ prac1
│  │     ├─ prac1.d.ts
│  │     ├─ prac1.d.ts.map
│  │     ├─ prac1.js
│  │     ├─ prac1.js.map
│  │     └─ prac1.ts
│  ├─ tuples
│  │  ├─ tuples.js
│  │  └─ tuples.ts
│  └─ types
│     ├─ index.d.ts
│     ├─ index.d.ts.map
│     ├─ index.js
│     ├─ index.js.map
│     └─ index.ts
└─ tsconfig.json

```