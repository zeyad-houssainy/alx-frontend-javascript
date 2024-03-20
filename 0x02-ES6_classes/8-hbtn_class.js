class HolbertonClass {
  static checker(attribute, type) {
    if ((type === 'string' && typeof (attribute) !== 'string')
    || (type === 'number' && typeof (attribute) !== 'number')
    || (type === 'array' && !Array.isArray(attribute))

    ) {
      throw new Error(`Name must be a ${type}`);
    }
    return true;
  }

  constructor(size, location) {
    HolbertonClass.checker(size, 'number');
    HolbertonClass.checker(location, 'string');
    this._size = size;
    this._location = location;
  }

  
}
export default HolbertonClass;
