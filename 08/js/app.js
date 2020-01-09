'use strict'
import Person from './classes/Person'
import SuperPerson from './classes/SuperPerson'
import Americano from './classes/Americano'
import Latte from './classes/Latte'
import Raf from './classes/Raf'

const vasya = new Person('Vasya', 'Petrov')
console.log(vasya)
console.log(vasya.weight)
vasya.weight = 1220
console.log(vasya.weight)
console.log(vasya.fullName)
vasya.firstName = 'Kolya'
console.log(vasya.fullName)
vasya.fullName = 'Sergey Ivanov'
console.log(vasya.firstName, vasya.lastName)
vasya.fullName = 'Test'
console.log(vasya.firstName, vasya.lastName)

vasya.sayHi()

Person.staticMethod()
SuperPerson.staticMethod()

Math.random()
const clark = new SuperPerson('Clark', 'Kent', 45)
console.log(clark)
clark.sayHi()
console.log(clark.getInfo())
console.log(vasya.getInfo())

console.log('------------------------')
const americano =  new Americano(2)
const latte =  new Latte(2)
const raf =  new Raf(0)
// console.log(americano)
console.log(americano.coffeeInfo)
// console.log(americano.getCoffeeInfo())
// console.log(latte.getCoffeeInfo())
// console.log(latte)
// console.log(raf)
// console.log(raf.getCoffeeInfo())




/*function Person (firstName, lastName, age = 23) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  // return this;
}
Person.prototype.sayHi = function () {
  console.log(`My name is ${this.firstName}`)
}

const vasya = new Person('Vasya', 'Petrov')
const petya = new Person('Petya', 'Petrov')
petya.sayHi()
console.log(vasya.hasOwnProperty('firstName'))

function SuperPerson (firstName, lastName, age = 23) {
  Person.apply(this, arguments);
  this.height = 173;
}
SuperPerson.prototype = Object.create(Person.prototype)
const clark = new SuperPerson('Clark', 'Kent', 45)
console.log(clark)*/









