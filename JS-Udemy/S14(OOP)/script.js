// 'use strict';

//1.  const Person = function (firstName, birthYear) {
//   //Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   //never do this
//   //   this.calcAge = function () {
//   //     console.log(2037 - this.birthYear);
//   //   };
// };

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// // //1.new {} is created
// // //2.function is created,this = {}
// // //3.{ }liked to prototype
// // //4.function automatically return {}

// // const matilda = new Person('Matilda', 2017);
// // const jack = new Person('jack', 1975);
// // console.log(matilda, jack);

// // console.log(jonas instanceof Person);

// Person.hey = function () {
//   console.log('hey there');
//   console.log(this);
// };

// Person.hey();

// // //Protoypes
// // console.log(Person.prototype);
// // Person.prototype.calcAge = function () {
// //   console.log(2037 - this.birthYear);
// // };

// // jonas.calcAge();
// // matilda.calcAge();

// // console.log(jonas.__proto__);
// // console.log(jonas.__proto__ == Person.prototype);

// // console.log(Person.prototype.isPrototypeOf(matilda));
// // console.log(Person.prototype.isPrototypeOf(jonas));
// // console.log(Person.prototype.isPrototypeOf(Person));

// // Person.prototype.species = 'Homo';
// // console.log(jonas.species, matilda.species);

// // console.log(jonas.hasOwnProperty('firstName'));
// // console.log(jonas.hasOwnProperty('species'));

// // console.log(jonas.__proto__);
// // //object.prototype(top of the prototype chain)
// // console.log(jonas.__proto__.__proto__);

// // console.log(jonas.__proto__.__proto__.__proto__); //null

// // //turns back to person function constructor itself
// // console.log(Person.prototype.constructor);
// // //log the person function
// // console.dir(Person.prototype.constructor);

// // //prototype of array
// // const arr = [3, 6, 6, 5, 6, 9, 9]; //new Array === []
// // console.log(arr.__proto__ == Array.prototype);

// // console.log(arr.__proto__.__proto__);

// // //its not good to use
// // Array.prototype.unique = function () {
// //   return [...new Set(this)];
// // };

// // console.log(arr.unique());
// // /////////

// // //prototype of html element
// // const h1 = document.querySelector('h1');

// // //prototype of function
// // //functions are objects
// // console.dir((x) => x + 1);

// /////////////
// challenge 1

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going ${this.speed} km/h`);
// };

// const car1 = new Car('BMW', 120);
// const car2 = new Car('MERCEDES', 95);

// console.log(car1);
// console.log(car2);

// car1.accelerate();
// car1.brake();
// // ///////////////

// //2. CLASSES EXPRETION IN JS
// // const PersonCl = class {};

// // CLASSES DECLARATION IN JS
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//METHODS WILL BE ADDED TO PROTOTYPE PROPERTY
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }
//   //   //INSTANCE METHODS
//   //   //SET A PROPERTY THAT ALREADY EXISTS
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   //   //STATIC METHOD
//   static hey() {
//     console.log('hey there');
//     console.log(this);
//   }
// }

// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);

// console.log(jessica.__proto__ == PersonCl.prototype);

// // //WE CAN STILL DO THIS TO ADD METHODS
// // ///////////////////
// // // PersonCl.prototype.greet = function () {
// // //   console.log(`Hey ${this.firstName}`);
// // // };
// // ////////////
// // jessica.greet();

// //1.CLASSES ARE NOT HOISTED(WE HAVE TO DECLARE THEM FIRST THAN USE THEM)
// //2.CLASSES ARE FIRST-CLASS CITIZENS
// //3.CLASSES ARE EXCUTED IN STRICT MODE

// const walter = new PersonCl('Walter White', 1965);
// PersonCl.hey();

// const account = {
//   owner: 'Jonas',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };
// //HOW TO CALL GET
// console.log(account.latest);
// //HOW TO CALL SET
// account.latest = 50;
// console.log(account.movements);

//GET AND SET ALSO ADDED INTO PROTOTYPE OF A CLASS

//////////////
// 3. Object create
// const personProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(personProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__ === personProto);

// const sarah = Object.create(personProto);
// sarah.init('sarah', 1979);
// sarah.calcAge();

///////////////
//CHALLENGE 2

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going ${this.speed} km/h`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going ${this.speed} km/h`);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new CarCl('ford', 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.brake();
// ford.speedUS = 50;
// console.log(ford);
/////////////
////////////////////////////
//linking
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// //LINKING PROTOTYPES
// // student.prototype = Person.prototype;
// student.prototype = Object.create(Person.prototype);

// student.prototype.introduce = function () {
//   console.log(`My Name Is ${this.firstName} And I Study ${this.course}`);
// };

// const mike = new student('Mike', 2020, 'computer Science');
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__);
// console.log(mike);

// console.log(mike instanceof student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);

// student.prototype.constructor = student;
// console.dir(student.prototype.constructor);

/////////////////

//////////////
//CHALLENGE 3

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

//LINK THE PROTOTYPES
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going ${this.speed} km.h with ${this.charge}% Battery`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();
