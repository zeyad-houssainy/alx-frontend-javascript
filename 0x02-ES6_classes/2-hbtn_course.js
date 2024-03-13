export default class HolbertonCourse {
  static checker(attribute, type) {
    if ((type === 'string' && typeof (attribute) !== 'string')
    || (type === 'number' && typeof (attribute) !== 'number')
    || (type === 'array' && !Array.isArray(attribute))
    ) {
      throw new Error(`Name must be a ${type}`);
    }
    return true;
  }

  constructor(name, length, students) {
    HolbertonCourse.checker(name, 'string');
    HolbertonCourse.checker(length, 'number');
    HolbertonCourse.checker(students, 'array');
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    HolbertonCourse.checker(newName, 'string');
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    HolbertonCourse.checker(newLength, 'number');
    this._length = newLength;
  }

  get students() {
    return this._students;
  }

  set students(newStudent) {
    HolbertonCourse.checker(newStudent, 'array');
    this._students = newStudent;
  }
}
