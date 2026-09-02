// Section 1: Initial Student Data
const students = [
  { id: "101", name: "Somchai", major: "CE", score: 85, contact: { email: "somchai@email.com", phone: "081-111-1111" } },
  { id: "102", name: "Somsri", major: "IT", score: 45, contact: { email: "somsri@email.com", phone: "082-222-2222" } },
  { id: "103", name: "Anan", major: "CE", score: 72, contact: { email: "anan@email.com", phone: "083-333-3333" } },
  { id: "104", name: "Kanya", major: "IT", score: 90, contact: { email: "kanya@email.com", phone: "084-444-4444" } },
  { id: "105", name: "Wichai", major: "CE", score: 38, contact: { email: "wichai@email.com", phone: "085-555-5555" } },
  { id: "106", name: "Manee", major: "IT", score: 60, contact: { email: "manee@email.com", phone: "086-666-6666" } }
];

// Section 2: Search Functions
const findById = (list, id) => {
  return list.find((s) => s.id === id);
};

const findByMajor = (list, major) => {
  return list.filter((s) => s.major === major);
};

const hasFailingStudent = (list) => {
  return list.some((s) => s.score < 50);
};

const getEmail = (list, id) => {
  const student = findById(list, id);
  return student?.contact?.email ?? "ไม่พบข้อมูลติดต่อ";
};

// Section 3: Testing & Adding Student using Spread Operator (No .push)
console.log("Find ID 101:", findById(students, "101"));
console.log("CE Major:", findByMajor(students, "CE"));
console.log("Has failing student:", hasFailingStudent(students));

// Test Not Found Cases (No error)
console.log("Find Non-existent ID:", findById(students, "9999"));
logEmailResult: console.log("Email Non-existent ID:", getEmail(students, "9999"));

// Add student without contact using Spread Operator
const newStudent = { id: "107", name: "Piti", major: "CE", score: 80 };
const updatedStudents = [...students, newStudent];

console.log("Email of student without contact:", getEmail(updatedStudents, "107"));