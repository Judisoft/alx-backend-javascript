export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  // check if arguments are arrays
  if (Object.getPrototypeOf(getListStudents) !== Array.prototype) {
    return [];
  }
  if (Object.getPrototypeOf(newGrades) !== Array.prototype) {
    return [];
  }

  return getListStudents.filter((student) => student.location === city).map((student) => {
    const [newGrade] = newGrades.filter((item) => item.studentId === student.id);
    return { ...student, grade: newGrade ? newGrade.grade : 'N/A' };
  });
}
