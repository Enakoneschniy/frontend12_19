import Person from './Person'

export default class SuperPerson extends Person {
  height = 173
  constructor (firstName, lastName, age = 23) {
    super(firstName, lastName, age)
  }
  getInfo () {
    return `${super.getInfo()}height: ${this.height}`
  }
}
