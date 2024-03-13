class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._lenght = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName === "string") {
      this._name = newName;
    } else {
      throw new Error("Name must be a string");
    }
  }

  get length() {
    return this._lenght;
  }

  set length(newLength) {
    if (typeof newLength === "number") {
      this._lenght = newLength;
    } else {
      throw new Error("length must be a number");
    }
  }

  get students() {
    return this._students;
  }

  set students(newStudent) {
    if (Array.isArray(newStudent)) {
      this._students = newStudent;
    } else {
      throw new Error("Students must be an array");
    }
  }
}
export default HolbertonCourse;
