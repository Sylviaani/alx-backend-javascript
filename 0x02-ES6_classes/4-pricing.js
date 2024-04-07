import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  set currency(currency) {
    if (!(currency instanceof Currency)) {
      throw TypeError('currency must be and instance of Currency');
    }
    this.currency = currency;
  }

  set amount(amount) {
    if (typeof amount !== 'number') {
      throw TypeError('Amount must be a number');
    }
    this.amount = amount;
  }

  get currency() {
    return this.currency;
  }

  get amount() {
    return this.amount;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
