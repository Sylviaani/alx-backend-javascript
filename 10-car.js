export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  get brand() {
    return this.brand;
  }

  set brand(value) {
    this.brand = value;
  }

  get motor() {
    return this.motor;
  }

  set motor(value) {
    this.motor = value;
  }

  get color() {
    return this.color;
  }

  set color(value) {
    this.color = value;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];

    return new Species();
  }
}
