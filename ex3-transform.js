// Sample Data (ใช้โครงสร้างเดียวกับข้อ 2)
const students = [
  { id: "101", name: "Somchai", major: "CE", score: 85, grade: "A" },
  { id: "102", name: "Somsri", major: "IT", score: 45, grade: "F" },
  { id: "103", name: "Anan", major: "CE", score: 72, grade: "B" },
  { id: "104", name: "Kanya", major: "IT", score: 90, grade: "A" },
  { id: "105", name: "Wichai", major: "CE", score: 38, grade: "F" },
  { id: "106", name: "Manee", major: "IT", score: 60, grade: "C" }
];

// Section 1: Utility Functions
const getNames = (list) => {
  return list.map((s) => s.name);
};

const getPassedStudents = (list) => {
  return list.filter((s) => s.score >= 50);
};

const getTotalScore = (list) => {
  return list.reduce((sum, s) => sum + s.score, 0);
};

const getAverageScore = (list) => {
  if (list.length === 0) return 0;
  const total = getTotalScore(list);
  return Number((total / list.length).toFixed(2));
};

const countByGrade = (list) => {
  return list.reduce((acc, s) => {
    acc[s.grade] = (acc[s.grade] || 0) + 1;
    return acc;
  }, {});
};

const getTopStudent = (list) => {
  if (list.length === 0) return null;
  return list.reduce((top, s) => (s.score > top.score ? s : top), list[0]);
};

// Section 2: One-liner Method Chaining (filter -> map -> reduce)
const cePassedAvg = students.filter((s) => s.major === "CE" && s.score >= 50).map((s) => s.score).reduce((acc, score, idx, arr) => (idx === arr.length - 1 ? (acc + score) / arr.length : acc + score), 0);

// Section 3: Testing Normal Data
console.log("All Names:", getNames(students));
console.log("Passed Students:", getPassedStudents(students));
console.log("Total Score:", getTotalScore(students));
console.log("Average Score:", getAverageScore(students));
console.log("Count by Grade:", countByGrade(students));
console.log("Top Student:", getTopStudent(students));
console.log("CE Passed Avg (Chained):", cePassedAvg);

// Edge Case Testing (Empty Array)
const emptyList = [];
console.log("--- Edge Cases (Empty Array) ---");
console.log("Names (empty):", getNames(emptyList));
console.log("Passed (empty):", getPassedStudents(emptyList));
console.log("Total (empty):", getTotalScore(emptyList));
console.log("Average (empty):", getAverageScore(emptyList));
console.log("Count Grade (empty):", countByGrade(emptyList));
console.log("Top Student (empty):", getTopStudent(emptyList));