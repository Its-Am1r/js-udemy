'use strict';

const Person = function (firstName, birthYear) {
  //OInstance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //never do this
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

//1.new {} is created
//2.function is created,this = {}
//3.{ }liked to prototype
//4.function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);

//Protoypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ == Person.prototype);

console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(Person));
