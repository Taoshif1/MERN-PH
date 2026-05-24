
const studentData: readonly [number, string, boolean] = [1, "Gazi Taoshif", true];
const [id, name, isActive] = studentData;

// This is allowed, but it can lead to type inconsistencies, use readonly tuples to prevent this.
// studentData.push(3, "Another Student", false); 

// console.log(`ID: ${id}, Name: ${name}, Active: ${isActive}`);
// console.log(studentData);

// The third element (score) is optional
type examResults = [boolean, string, number?];

const result1: examResults = [true, "Taoshif", 85];
const result2: examResults = [false, "Another Student"]; // score is optional

// console.log(result1);
// console.log(result2);

// Labels provide instant clarity during hover
type GeoLocation = [latitude: number, longitude: number];

const dhaka: GeoLocation = [23.8103, 90.4125];
// console.log(`Dhaka is located at Latitude: ${dhaka[0]}, Longitude: ${dhaka[1]}`);

// Rest Elements in Tuples (Dynamic Length) Must start with a string (tag), followed by any number of numbers
type SpreadsheetRow = [string, ...number[]];

const salesData: SpreadsheetRow = ["January Sales", 120, 450, 300, 900];
console.log(salesData);
