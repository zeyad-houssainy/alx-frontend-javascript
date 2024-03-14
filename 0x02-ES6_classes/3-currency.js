class Currency {
  static checker(attribute, type) {
    if (type === 'string' && typeof (attribute) !== 'string') {
      throw new Error(`Name must be a ${type}`);
    }
    return true;
  }

  constructor(code, name) {
    Currency.checker(code, 'string');
    Currency.checker(name, 'string');
    this._name = name;
    this._code = code;
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    Currency.checker(newCode, 'string');
    this._code = newCode;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    Currency.checker(newName, 'string');
    this._name = newName;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
export default Currency;
