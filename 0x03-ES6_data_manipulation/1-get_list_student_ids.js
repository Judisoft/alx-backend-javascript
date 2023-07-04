export default function getListStudentIds(arrayOfObjects) {
  const arrayOfIds = [];
  for (let i = 0; i < arrayOfObjects.length; i++) {
    arrayOfIds.push(arrayOfObjects[i].id);
  }

  return arrayOfIds;
}
