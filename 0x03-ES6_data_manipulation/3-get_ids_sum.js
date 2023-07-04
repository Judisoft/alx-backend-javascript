export default function getStudentIdsSum(students) {
  if (Object.getPrototypeOf(students) === Array.prototype) {
    const ids = students.map((student) => student.id);
    const reducer = (partialSum, currentValue) => partialSum + currentValue;
    return ids.reduce(reducer);
  }

  return [];
}
