const isValidScore = (score) => {
  return typeof score === 'number' && score >= 0 && score <= 100;
};

const toGrade = (score) => {
  if (!isValidScore(score)) {
    return 'Invalid';
  }

  const GRADE_THRESHOLDS = [
    { min: 80, grade: 'A' },
    { min: 75, grade: 'B+' },
    { min: 70, grade: 'B' },
    { min: 65, grade: 'C+' },
    { min: 60, grade: 'C' },
    { min: 55, grade: 'D+' },
    { min: 50, grade: 'D' },
    { min: 0, grade: 'F' }
  ];

  const matchedGrade = GRADE_THRESHOLDS.find((item) => score >= item.min);
  return matchedGrade ? matchedGrade.grade : 'F';
};

const calculateWorkshopScore = (raw, full = 60, weight = 20) => {
  return (raw / full) * weight;
};

function calculateTotal(workshop, attendance, project, midterm, final) {
  return workshop + attendance + project + midterm + final;
}

// Section 2: Test Data & Display Table
const students = [
  { name: 'Alice', workshop: 18, attendance: 10, project: 25, midterm: 18, final: 20 },
  { name: 'Bob', workshop: 14, attendance: 8, project: 20, midterm: 12, final: 15 },
  { name: 'Charlie', workshop: 20, attendance: 10, project: 30, midterm: 22, final: 24 }
];

const summaryData = students.map((s) => {
  const total = calculateTotal(s.workshop, s.attendance, s.project, s.midterm, s.final);
  return {
    Name: s.name,
    Total: total,
    Grade: toGrade(total)
  };
});

console.table(summaryData);

// Section 3: Default Parameter Verification
const testDefault1 = calculateWorkshopScore(48);
const testDefault2 = calculateWorkshopScore(48, 60, 20);
const testUndefined = calculateWorkshopScore(48, undefined, 25);

console.log('Result 1:', testDefault1);
console.log('Result 2:', testDefault2);
console.log('Both are equal:', testDefault1 === testDefault2);

// Passing undefined triggers the default value (full = 60), so it calculates (48 / 60) * 25
console.log('Result with undefined:', testUndefined);