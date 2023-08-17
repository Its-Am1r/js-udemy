'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
};

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3} `);
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//fix capitalization in name
const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//comparing email
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

const normalizedEmail = loginEmail.toLowerCase().trim();

console.log(normalizedEmail);
console.log(email === normalizedEmail);

//replacing

const priceGB = '288,978£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcment = `A;; passengers come to barding door 23.boarding door 23`;

console.log(announcment.replace(/door/g, 'gate'));

//Booleans

const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('part of the new airbus');
}

const chaeckBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('you dont have premission');
  } else {
    console.log('you are good to go');
  }
};

chaeckBaggage('i have a laptop,some food and a Knife');
chaeckBaggage('socks and camera');
chaeckBaggage('some snacks and gun');

//////////////////////////
//work with strings part 1
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('b737'.length);

// //for position
// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat');
//   else console.log('you are lucky');
// };
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// //turn string to an object
// console.log(new String('jonas'));
// console.log(typeof new String('jonas'));
// //turn from object to string
// console.log(typeof new String('jonas').slice(1));

//maps
// const question = new Map([
//   ['question', 'what is the best programming language in the world ?'],
//   [1, 'c'],
//   [2, 'java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'correct'],
//   [false, 'try again'],
// ]);

// console.log(question);

// //convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// //quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`answer ${key}: ${value}`);
// }
// // const answer = Number(prompt('Your answer'));
// const answer = 3;
// console.log(answer);
// console.log(question.get(question.get('correct') === answer));

// //convert map to array
// console.log([...question]);
// // console.log(question.entries());
// console.log(question.keys());
// console.log(question.values());
// ///////////////////////
// //Maps basics
// const rest = new Map();
// rest.set('name', 'classico italiano');
// rest.set(1, 'Firenze,Italy');
// console.log(rest.set(2, 'Lisbon,portugal'));

// //chaning in map
// rest
//   .set('categories', ['Italian', 'pizzeria', 'vegeterian', 'organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'we are open')
//   .set(false, 'we are closed');

// console.log(rest.get('name'));
// console.log(rest.get(true));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// const arr = [1, 2];
// rest.set(arr, 'test');
// rest.set(document.querySelector('h1'), 'heading');
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));
// console.log(rest);

////////////////////////////
//sets
// const orederSet = new Set(['pizza', 'pizza', 'pasta', 'rissoto', 'pasta']);
// console.log(orederSet);
// console.log(orederSet.size);
// console.log(orederSet.has('bread'));
// console.log(orederSet.has('pizza'));
// console.log(orederSet.add('Garlic Bread'));

// for (const order of orederSet) console.log(order);

// //example for sets
// const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'chef'];

// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(new Set('amirhossein').size);

// /////////////////////////

///////////////////////////
//optional chaning

//withour optional chaining
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// //with optional chaning
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// //example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open || 'closed';
//   console.log(`on ${day} we open at ${open}`);
// }
////////////////////////////

///////////////////////////

//property names
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `we are open on ${properties.length} days:`;

// for (const day of properties) {
//   openStr += `${day}`;
// }
// console.log(openStr);

// //property values
// const value = Object.values(openingHours);
// console.log(value);

// //property enteries
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`on ${key} we open at ${open} and close at ${close}`);
// }

//for of loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`);

// console.log(...menu.entries());

//////////////////

// //challenge
// const game = {
//   team1: 'bayern munich',
//   team2: 'dortmund',

//   players: [
//     [
//       'neuer',
//       'pavard',
//       'martinez',
//       'alaba',
//       'davies',
//       'kimmich',
//       'goretzka',
//       'coman',
//       'muller',
//       'gnabry',
//       'lewandowski',
//     ],
//     [
//       'burki',
//       'schulz',
//       'hummels',
//       'akanji',
//       'hakimi',
//       'weigl',
//       'witsel',
//       'hazard',
//       'brandt',
//       'sancho',
//       'gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['lewandowski', 'Gnabry', 'lewandowski', 'hummels'],
//   date: 'nov 9th,2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// //1
// let num = 0;
// const { team1, draw, team2 } = game.odds;

// for (const goal of game.scored) {
//   num++;
//   console.log(`goal ${num}:${goal} scored a goal`);
// }
// //2
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);

// //3
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamString = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`odd of ${teamString} : ${odd}`);
// }

// const [players1, playesr2] = game.players;

// const [gk, ...fieldPlayers] = players1;

// const allPlayers = [...players1, ...playesr2];

// const player1Finals = [...players1, 'couthinio', 'priscic', 'thiago'];

// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// const printGoals = function (...players) {
//   console.log(`${players.length} goals scored by ${game.scored}`);
// };

// team1 < team2 && console.log('Team1 is more lucky to win');
// team1 > team2 && console.log('Team2 is more lucky to win');

// const gameEvents = new Map([
//   [17, 'Goal'],
//   [36, 'substitution'],
//   [47, 'Goal'],
//   [61, 'substitution'],
//   [64, 'yellow card'],
//   [69, 'red card'],
//   [70, 'substitution'],
//   [72, 'substitution'],
//   [76, 'Goal'],
//   [80, 'Goal'],
//   [92, 'yellow card'],
// ]);

// //1
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// //2
// gameEvents.delete(64);

// //3

// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(
//   `an event happend on,on average,every ${time / gameEvents.size} minutes`
// );

// //4
// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? 'first' : 'second';
//   console.log(`[ ${half} HALF] ${min}: ${event}`);
// }
//////////////////////////////////////

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// //nullish values:null or undefiend but not 0 or ''
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// //short circuitung

// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'hello' || 23 || null);

// restaurant.numGuests = 0;
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('----AND----');

// console.log(0 && 'jonas');
// console.log(7 && 'jonas');

// console.log('hello ' && 23 && null && 'jonas');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

////////////////////////////////////////

//rest pattern and parametrs

// //spread beacuse on right side of =
// const arr = [1, 2, ...[3, 4]];

// //rest beacuse on left side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// //in objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// //in functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');
////////////////////////////

//spread operator

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// //join 2 arrays
// const menu = [...mainMenuCopy, ...restaurant.starterMenu];
// console.log(menu);

// //Iterables
// const str = 'Jonas';
// const letters = [...str, ' ', 's.'];
// console.log(letters);
// //or
// console.log(...str);

// // const ingredients = [
// //   // prompt("Let's make pasta! Ingredients 1"),
// //   // prompt("Let's make pasta! Ingredients 2"),
// //   // prompt("Let's make pasta! Ingredients 3"),
// // ];
// // console.log(ingredients);

// // restaurant.orderPasta(...ingredients);

// //objects
// const newRestaurant = { founeIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);
// /////////////////////////////

//destructuring objects
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'via del sole 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'via del sole 21',
//   starterIndex: 1,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// //default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //mutating variables

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// //nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

////////////////////////
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// ///////////////////

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// /////////////////

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //default valeus
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
