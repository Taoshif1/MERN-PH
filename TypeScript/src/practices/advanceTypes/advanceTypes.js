"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const info = [1, "Gazi Taoshif", true];
// 2️⃣ Create Enum (Use PascalCase for Enum names and PascalCase for members)
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Pending"] = "Pending";
    PaymentStatus["Completed"] = "Completed";
    PaymentStatus["Failed"] = "Failed";
})(PaymentStatus || (PaymentStatus = {}));
var CourseStatus;
(function (CourseStatus) {
    CourseStatus["NotStarted"] = "Not Started";
    CourseStatus["InProgress"] = "In Progress";
    CourseStatus["Completed"] = "Completed";
})(CourseStatus || (CourseStatus = {}));
const user1 = {
    id: 1,
    name: "Gazi Taoshif",
    email: "taoshif2@gmail.com",
    isActive: true
};
// Partial makes all properties of User optional (id?, name?, email?, isActive?)
const userUpdate = {
    email: "newemail@gmail.com" // Safe! We can pass only what we want to update
};
const userPreviewData = {
    id: 1,
    name: "Gazi Taoshif"
    // email or isActive here would throw a compiler error
};
// 5️⃣ Create Async Function
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        // Safe type guarding for unknown error formats
        if (error instanceof Error) {
            console.error("Error fetching data:", error.message);
        }
        else {
            console.error("An unknown error occurred");
        }
        return [];
    }
}
// ==========================================
// 🚀 EXECUTION & TESTING SECTION
// ==========================================
// 1. Destructure and print Tuple data
const [storeId, storeName, isPremiumStore] = info;
console.log(`🏪 Store Profile -> ID: ${storeId}, Name: ${storeName}, Premium: ${isPremiumStore}`);
// 2. Print Enum values to see how they resolve to strings
console.log(`💳 Current Bill Status: ${PaymentStatus.Completed}`);
console.log(`📚 Current Course Status: ${CourseStatus.InProgress}`);
// 3. Simulating a real update function using Partial<User> update object
function updateUserProfile(currentProfile, updates) {
    return { ...currentProfile, ...updates };
}
const updatedUser = updateUserProfile(user1, userUpdate);
console.log("🔄 Updated User Document:", updatedUser);
// 4. Print Picked User Preview
console.log("👤 Public Card Data Preview:", userPreviewData);
// 5. Invoke Async function using a public placeholder API
async function runAsyncTest() {
    console.log("🌐 Fetching mock data...");
    // A mock API that returns a list of user names
    const mockUrl = "https://jsonplaceholder.typicode.com/users";
    const usersData = await fetchData(mockUrl);
    // Map through the raw data structure to grab individual strings
    if (usersData.length > 0) {
        // First 3 items returned from the fetch promise
        console.log("✅ Fetch Successful! Sample user objects retrieved:", usersData.slice(0, 3));
    }
}
// Call the test wrapper function
runAsyncTest();
