export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  set location(location) {
    this.location = location;
  }

  get location() {
    return this.location;
  }

  set size(size) {
    this.size = size;
  }

  get size() {
    return this.size;
  }

  // eslint-disable-next-line consistent-return
  [Symbol.toPrimitive](type) {
    if (type === 'number') {
      return this.size;
    }
    if (type === 'string') {
      return this.location;
    }
  }
}
