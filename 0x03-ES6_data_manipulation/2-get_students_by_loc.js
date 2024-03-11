import getListStudents from './0-get_list_students';

export default function getStudentsByLocation(students, city) {
  const locationStudents = getListStudents();

  return locationStudents.filter((std) => std.location === city);
}
