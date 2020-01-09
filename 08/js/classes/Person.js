export default class Person {
  #weight = 10
  constructor (firstName, lastName, age = 23) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  sayHi() {
    privateFunc.call(this, 234, 324)
    console.log(`My name is ${this.firstName} ${this.lastName}`)
  }
  static staticMethod () {
    console.log('Hello!')
  }
  get weight () {
    return this.#weight
  }
  set weight(value) {
    if(typeof value !== 'string' && value > 0) {
      this.#weight = value
    }
  }
  getInfo() {
    return `
    firstName: ${this.firstName}
    lastName: ${this.lastName}
    age: ${this.age}
    `;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
  set fullName(value) {
    if(value.includes(' ')) {
      [this.firstName, this.lastName] = value.split(' ')
    }
  }
  getInfo2() {
    return Object.keys(this).reduce((res, prop) => {
      return res + `${prop}: ${this[prop]}\n`
    }, '');
  }
}
function privateFunc () {
  console.log('privateFunc', arguments, this)
}
