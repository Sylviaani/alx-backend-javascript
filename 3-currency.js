export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get name() {
    return this.name;
  }

  set name(name) {
    this.name = name;
  }

  get code() {
    return this.code;
  }

  set code(code) {
    this.code = code;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
