export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get name() {
    return this.name;
  }

  set name(value) {
    this.name = value;
  }

  get code() {
    return this.code;
  }

  set code(value) {
    this.code = value;
  }

  get [Symbol.toStringTag]() {
    return this.code;
  }
}
