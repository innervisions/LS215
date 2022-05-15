let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(scores) {
  let scoreData = Object.keys(scores).map(student => scores[student].scores);
  let examData = scoreData.map(score => score.exams);

  return {
    studentGrades: scoreData.map(scoreObj => getStudentScore(scoreObj)),
    exams: getExamSummary(examData),
  };
}

function getStudentScore(scoreObj) {
  let exams = scoreObj['exams'];
  let exercises = scoreObj['exercises'];
  let examsAverage = exams.reduce((total, score) => total + score) / exams.length;
  let exercisesSum = exercises.reduce((total, score) => total + score);
  let studentScore = Math.round((examsAverage * .65) + (exercisesSum * .35));
  return `${studentScore} (${getLetterGrade(studentScore)})`;
}

function getExamSummary(examData) {
  let examsSummary = [];
  for (let i = 0; i < examData[0].length; i++) {
    let examScores = examData.map(studentScores => studentScores[i]);
    let examAverage = examScores.reduce((total, score) => total + score) / examScores.length;
    examsSummary.push({
      average: examAverage,
      minimum: Math.min(...examScores),
      maximum: Math.max(...examScores)
    });
  }

  return examsSummary;
}

function getLetterGrade(studentScore) {
  if(studentScore >= 93) return 'A';
  if(studentScore >= 85) return 'B';
  if(studentScore >= 77) return 'C';
  if(studentScore >= 69) return 'D';
  return 'F';
}

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: ['87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)'],
//     exams: [
//       { average: 75.6, minimum: 50, maximum: 100 },
//       { average: 86.4, minimum: 70, maximum: 100 },
//       { average: 87.6, minimum: 60, maximum: 100 },
//       { average: 91.8, minimum: 80, maximum: 100 },
//     ],
// }
