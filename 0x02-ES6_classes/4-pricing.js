import Currency from './3-currency.js';

class Pricing {
  static checker(attribute, type) {
    if ((type === 'string' && typeof (attribute) !== 'string')
    || (type === 'number' && typeof (attribute) !== 'number')
    || (type === 'array' && !Array.isArray(attribute))
    || (type === 'currency' && !(attribute instanceof Currency))
    ) {
      throw new Error(`Name must be a ${type}`);
    }
    return true;
  }

  constructor(amount, currency) {
    Pricing.checker(amount, 'number');
    Pricing.checker(currency, 'currency');
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    Pricing.checker(newAmount, 'number');
    this._amount = newAmount;
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    Pricing.checker(newCurrency, 'currency');
    this._currency = newCurrency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    Pricing.checker(amount, 'number');
    Pricing.checker(conversionRate, 'number');
    return amount * conversionRate;
  }
}
export default Pricing;
