export default function getStudentsByLocation(students, city) {
  const studentsPerCity = students.filter((student) => student.location === city);
  return studentsPerCity;
}
