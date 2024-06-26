import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  get floors() {
    return this.floors;
  }

  set floors(value) {
    this.floors = value;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
