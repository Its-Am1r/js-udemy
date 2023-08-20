// 'use strict';

// // const bookings = [];
// // const createBooking = function (flightNum, numPassengers = 1, price = 199) {
// //   const booking = {
// //     flightNum,
// //     numPassengers,
// //     price,
// //   };
// //   console.log(booking);
// //   bookings.push(booking);
// // };

// // createBooking('LH123');
// // createBooking('LH123', 2, 800);
// // createBooking('LH453', undefined, 800);

// ///////////////////////////////////////
// //passing arguements

// // const flight = 'LH234';
// // const jonas = {
// //   name: 'Jonas',
// //   passport: 2342545353544,
// // };

// // const checkIn = function (flightNum, passenger) {
// //   flightNum = 'LH999';
// //   passenger.name = 'Mr. ' + passenger.name;

// //   if (passenger.passport === 2342545353544) {
// //     alert('Checked in');
// //   } else {
// //     alert('Wrong Passport');
// //   }
// // };
// // // checkIn(flight, jonas);
// // // console.log(flight);
// // // console.log(jonas);

// // // //In the same as doing ...
// // // const flightNum = flight;
// // // const passenger = jonas;

// // const newPassport = function (person) {
// //   person.passport = Math.random() * 1000000000;
// // };

// // newPassport(jonas);
// // checkIn(flight, jonas);
// /////////////////////////////////////////

// ////////////////////////////////////////////
// //function accepting call back functions

// // const oneWord = function (str) {
// //   return str.replace(/ /g, '').toLoweCase();
// // };

// // const upperFirstWord = function (str) {
// //   const [first, ...other] = str.split(' ');
// //   return [first.toUpperCase(), ...other].join(' ');
// // };

// // const transformer = function (str, fn) {
// //   console.log(`original string: ${str}`);
// //   console.log(`Transformed String: ${fn(str)}`);

// //   console.log(`transformed by : ${fn.name}`);
// // };

// // transformer('JavaScript is the best', upperFirstWord);
// // transformer('JavaScript is the best', oneWord);

// // //js uses callbacks all the time
// // const high5 = function () {
// //   console.log('✋');
// // };

// // document.body.addEventListener('click', high5);
// // ['jonas', 'marta', 'adam'].forEach(high5);
// ////////////////////////////////////////////////////

// ///////////////////////////////
// //function returning function
// // const greet = function (greeting) {
// //   return function (name) {
// //     console.log(`${greeting} ${name}`);
// //   };
// // };
// // const greeterHey = greet('Hey');
// // greeterHey('jonas');
// // greeterHey('steven');

// // greet('Hello')('jonas');

// // //challenge
// // const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

// // greetArr('Hi')('Jonas');
// //////////////////////////////

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   // book: function() {}
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}${name}` });
//   },
// };

// lufthansa.book(239, 'Jonas');
// lufthansa.book(635, 'john');
// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eutowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// //does not work
// // book(23, 'sarah');

// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//   airline: 'swis airlines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 583, 'Mary Cooper');
// console.log(swiss);

// //Apply Method
// const flightData = [584, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// //BETTER WAY
// book.call(swiss, ...flightData);

// //BIND METHOD
// // book.call(eurowings, 23, 'Sarah Williams');

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);
// bookEW(23, 'steven williams');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Jonas');
// bookEW23('Martha');

// //with event listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// // lufthansa.buyPlane();

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// //partial application

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// // addVAT = (value) => value + value * rate;
// console.log(addVAT(100));
// console.log(addVAT(23));

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));

/////////////////////
//challenge 1
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );

//     console.log(answer);

//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));
// //////////////////////

///////////////////
//clousers
// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };
// const booker = secureBooking();

// booker();
// booker();
// booker();

//////////////////

////////////////
//IIFE
// const runOnce = function () {
//   console.log('This will never run again');
// };
// runOnce();

// (function () {
//   console.log('This will never run again');
//   const isPrivate = 23;
// })();

// // console.log(isPrivate);

// (() => console.log('This will ALSO never run again'))();

// {
//   const isPrivate = 23;
//   var notPrivate = 46;
// }
// // console.log(isPrivate);
// console.log(notPrivate);

// // Example 1
// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.dir(f);

// // Re-assigning f function
// h();
// f();
// console.dir(f);

// // Example 2
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// const perGroup = 1000;
// boardPassengers(180, 3);

//challenge 2

// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';

//   document.querySelector('body').addEventListener('click', function () {
//     header.style.color = 'blue';
//   });
// })();
