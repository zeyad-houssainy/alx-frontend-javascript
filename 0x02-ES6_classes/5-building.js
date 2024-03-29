class Building {
  static checker(attribute, type) {
    if ((type === 'string' && typeof (attribute) !== 'string')
    || (type === 'number' && typeof (attribute) !== 'number')
    || (type === 'array' && !Array.isArray(attribute))

    ) {
      throw new Error(`Name must be a ${type}`);
    }
    return true;
  }

  constructor(sqft) {
    Building.checker(sqft, 'number');
    this._sqft = sqft;
    // check if constructor is the class itself 
    // check if method is not overriden
    if ((this.constructor === Building) || (this.evacuationWarningMessage === undefined)) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    Building.checker(newSqft, 'number');
    this._sqft = newSqft;
  }
}
export default Building;
