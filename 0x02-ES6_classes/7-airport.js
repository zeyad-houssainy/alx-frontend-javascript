class Airport {
  static checker(attribute, type) {
    if ((type === 'string' && typeof (attribute) !== 'string')
    || (type === 'number' && typeof (attribute) !== 'number')
    || (type === 'array' && !Array.isArray(attribute))

    ) {
      throw new Error(`Name must be a ${type}`);
    }
    return true;
  }

  constructor(name, code) {
    Airport.checker(name, 'string');
    Airport.checker(code, 'string');
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    Airport.checker(newName, 'string');
    this._name = newName;
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    Airport.checker(newCode, 'string');
    this._code = newCode;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
export default Airport;
