// ==========================
// 🟢 1. Ways to Initialize Objects
// ==========================

// (a) Object literal (most common)
const obj1 = {
  name: "Swaraj",
  age: 22
};

// (b) Using new Object()
const obj2 = new Object();
obj2.name = "Swaraj";
obj2.age = 22;

// (c) Constructor function (older style)
function PersonFn(name, age) {
  this.name = name;
  this.age = age;
}
const obj3 = new PersonFn("Swaraj", 22);

// (d) ES6 Class
class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const obj4 = new PersonClass("Swaraj", 22);

// (e) Using Object.create()
const proto = { greet() { console.log("Hello!"); } };
const obj5 = Object.create(proto);
obj5.name = "Swaraj";


// ==========================
// 🟢 2. Ways to Access Properties
// ==========================

const sampleObj = {
  "First Name": "Swaraj",
  age: 22,
  hobbies: ["Music", "Coding", "Travel"]
};

// (a) Dot notation
console.log(sampleObj.age); // 22

// (b) Bracket notation (needed for special keys or dynamic keys)
console.log(sampleObj["First Name"]); // Swaraj
let key = "age";
console.log(sampleObj[key]); // 22


// ==========================
// 🟢 3. Built-in Object Methods
// ==========================

console.log(Object.keys(sampleObj));   // ["First Name", "age", "hobbies"]
console.log(Object.values(sampleObj)); // ["Swaraj", 22, Array(3)]
console.log(Object.entries(sampleObj));// [["First Name","Swaraj"],["age",22],["hobbies",["Music","Coding","Travel"]]]

console.log("age" in sampleObj);               // true
console.log(sampleObj.hasOwnProperty("age")); // true

const objA = { a: 1 }, objB = { b: 2 };
const merged = Object.assign({}, objA, objB);
console.log(merged); // {a:1, b:2}

Object.freeze(sampleObj); // prevents changes
Object.seal(sampleObj);   // prevents adding/removing keys, but allows changing values

console.log(Object.getPrototypeOf(sampleObj));


// ==========================
// 🟢 4. Looping through Objects
// ==========================

// (a) for…in loop
for (let key in sampleObj) {
  console.log(key, ":", sampleObj[key]);
}

// (b) Object.keys + forEach
Object.keys(sampleObj).forEach(key => {
  console.log(key, sampleObj[key]);
});

// (c) Object.entries + for…of
for (let [key, value] of Object.entries(sampleObj)) {
  console.log(key, value);
}


// ==========================
// 🟢 5. JSON Methods
// ==========================

// Convert object to JSON string
const jsonStr = JSON.stringify(sampleObj);
console.log(jsonStr);

// Convert JSON string back to object
const parsedObj = JSON.parse(jsonStr);
console.log(parsedObj);


// ==========================
// 🟢 6. Destructuring
// ==========================

const { age, hobbies } = sampleObj;
console.log(age);        // 22
console.log(hobbies[1]); // Coding


// ==========================
// 🟢 7. Optional Chaining & Nullish Coalescing
// ==========================

console.log(sampleObj?.hobbies?.[0]);         // Music
console.log(sampleObj.middleName ?? "N/A");  // N/A
