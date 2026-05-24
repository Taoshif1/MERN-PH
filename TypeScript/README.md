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
   ├─ narrowing/        # Type guards, truthiness checks & OOP instance guarding
   ├─ tuples/           # Immutable arrays, optional fields, labels & rest elements
   └─ practices/
      ├─ prac1/         # Basic domain architecture layout practice
      ├─ advanceTypes/  # Utility types (Partial, Pick), Enums & Async operations
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

## 📈 Key Architecture Takeaways

1. **Development-Time Bug Interception**: Caught missing parameters, faulty updates, and implicit bounds vulnerabilities directly inside the code editor before executing files in runtime environments.
2. **Structural Type Matching (Duck Typing)**: Understood that TypeScript matches objects based on their properties and shapes rather than focusing purely on explicit class assignments.
3. **Clean Folder Workspace Strategy**: Learned how to fine-tune compilation parameters to control the output of matching `.js`, `.d.ts`, and `.map` files across nested subdirectories.

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
│  ├─ narrowing
│  │  ├─ index.js
│  │  └─ index.ts
│  ├─ practices
│  │  ├─ advanceTypes
│  │  │  ├─ advanceTypes.js
│  │  │  └─ advanceTypes.ts
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