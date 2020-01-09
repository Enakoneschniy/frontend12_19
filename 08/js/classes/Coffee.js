export default class Coffee {
  coffee = 12
  water = 50
  constructor (sugar) {
    this.sugar = sugar
  }
  getCoffeeInfo() {
    return Object.keys(this).reduce((res, prop) => {
      return res + `${prop}: ${this[prop]}\n`
    }, '');
  }
  get coffeeInfo() {
    return Object.keys(this).reduce((res, prop) => {
      return res + `${prop}: ${this[prop]}\n`
    }, '');
  }
}
