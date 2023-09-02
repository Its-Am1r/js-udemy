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

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// //LINK THE PROTOTYPES
// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} is going ${this.speed} km.h with ${this.charge}% Battery`
//   );
// };

// const tesla = new EV('Tesla', 120, 23);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.brake();
// tesla.accelerate();

////////////////////////
//LINKING ES6 CLASSES
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

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

// class studentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     //   //ALWAYS NEEDS TO HAPPEN FIRST
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My Name is ${this.fullName} and I study ${this.course}`);
//   }

//   //OVERWRITES CALC AGE THAT WAS IN PARENT CLASS
//   calcAge() {
//     console.log(
//       `Im ${2037 - this.birthYear} years old but as student i feel more like ${
//         2037 - this.birthYear + 10
//       }`
//     );
//   }
// }

// const martha = new studentCl('Marthe Jones', 2012, 'computer science');
// martha.introduce();
// martha.calcAge();
////////////

/////////////////
//INHERITANCE BETWEEN CLASSES: OBJECT.CREATE
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// const StudentsProto = Object.create(PersonProto);
// StudentsProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentsProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const jay = Object.create(StudentsProto);

// jay.init('Jay', 2010, 'computer science');
// jay.introduce();
// jay.calcAge();
/////////////////

//1.PUBLIC FIELDS
//2.PRIVATE FIELDS
//3.PUBLIC METHODS
//4.PRIVATE METHODS
//THERE IS ALSO THE STATIC VERSION

// class Account {
//   //1.PUBLIC FIELDS(instances)
//   local = navigator.language;

//   //2.PRIVATE FIELDS(instances)
//   #movements = [];
//   #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     //PROTECTED PROPERTY
//     this.#pin = pin;
//     this._movements = [];
//     this.local = navigator.language;

//     console.log(`thanks for opening an account, ${owner}`);
//   }
//   //3.PUBLIC MATHODS
//   //PUBLIC INTERFACE
//   getMovements() {
//     return this.#movements;
//   }

//   deposit(val) {
//     this.#movements.push(val);
//     return this;
//   }

//   withdraw(val) {
//     this.deposit(-val);
//     return this;
//   }

//   requestLoan(val) {
//     // if (this.#approveloan(val)) {
//     if (this._approveloan(val)) {
//       this.deposit(val);
//       console.log('loan approved');
//       return this;
//     }
//   }

//   static helper() {
//     console.log('Helper');
//   }

//   //4.PRIVATE METHODS
//   // #approveloan(val) {
//   _approveloan(val) {
//     return true;
//   }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);
// console.log(acc1);

// // acc1.movements.push(250);
// // acc1.movements.push(-140);
// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000);
// // acc1.approveloan(1000);
// console.log(acc1.getMovements());
// console.log(acc1);
// Account.helper();

// // console.log(acc1.#movements);
// // console.log(acc1.#pin);
// // console.log(acc1.#approveLoan(100));

// //CHAINING
// acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
// console.log(acc1.getMovements());

/////////////////////

////////////////
//CHALLENGE 4

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
//     return this;
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// class EVCL extends CarCl {
//   #charge;
//   constructor(make, speed, charge) {
//     super(make, speed);
//     this.#charge = charge;
//   }

//   chargeBattery(chargeTo) {
//     this.#charge = chargeTo;
//     return this;
//   }

//   accelerate() {
//     this.speed += 20;
//     this.#charge--;
//     console.log(
//       `${this.make} is going at ${this.speed} km/h with charge of ${
//         this.#charge
//       }`
//     );
//     return this;
//   }
// }

// const rivian = new EVCL('Rivian', 120, 23);
// console.log(rivian);

// // console.log(rivian.#charge);
// rivian
//   .accelerate()
//   .accelerate()
//   .accelerate()
//   .brake()
//   .chargeBattery(50)
//   .accelerate();

// console.log(rivian.speedUS);

//////////////////
