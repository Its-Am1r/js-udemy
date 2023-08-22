'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `   <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}€</div>
  </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcdisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outcomes = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLocaleLowerCase()
      .split(' ')
      .map((name) => name[0])
      .join('');
  });
};

createUsernames(accounts);
const updateUI = function (acc) {
  //display movements
  displayMovements(acc.movements);
  //display balance
  calcdisplayBalance(acc);
  //display summary
  calcDisplaySummary(acc);
};

//EVENT HANDLER
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  //prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //display ui and massege
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';

    //update ui
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAcc &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    //update ui
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    //add movement
    currentAccount.movements.push(amount);
    //updateui
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );

    console.log(index);
    //delete account
    accounts.splice(index, 1);

    //hide ui
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

////////////////////////
// //array mathods

// //SLICE
// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log([...arr]);

// //SPLICE
// // console.log(arr.splice(2));
// arr.splice(-1);
// arr.splice(1, 2);
// console.log(arr);

// //REVERSE
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// //CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// //JOIN
// console.log(letters.join(' - '));
// ////////////////////////////

///////////////////////////
//for of loop in array
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: you deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: you withdraw ${Math.abs(movement)}`);
//   }
// }

// //for each loop in array
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: you deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: you withdraw ${Math.abs(mov)}`);
//   }
// });

// //0:function(200)
// //1:function(450)
// //2:function(400)
//////////////////////////

/////////////////////////
//for each loop in map and set

// //map
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// //set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });
////////////////////////

/////////////////////
//challenge 1

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);

//   const dogs = dogsJuliaCorrected.concat(dogsKate);
//   console.log(dogs);

//   dogs.forEach(function (dog, i) {
//     if (dog >= 3) {
//       console.log(`dog number ${i + 1} is an adult and is ${dog} years old`);
//     } else {
//       console.log(`dog number ${i + 1} is still poppy and is ${dog} years old`);
//     }
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
///////////////////////

//////////////////////
//filter method
// const deposites = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposites);

// const depositesFor = [];
// for (const mov of movements) if (mov > 0) depositesFor.push(mov);
// console.log(depositesFor);

// const withdrawls = movements.filter(function (mov) {
//   return mov < 0;
// });

// const withdrawlsFor = [...withdrawls];
// console.log(withdrawlsFor);
///////////////////////

//////////////////////
//reduce method

//regular function
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`iteraation ${i}: ${acc}`);
//   return acc + cur;
// }, 0);

// //arrow function
// const balance = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance);

// //with for loop
// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

// //maximum value
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);
// console.log(max);

/////////////////////////

////////////////////
// challenge 2
// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
//   console.log(humanAges);
//   const adultDogs = humanAges.filter((age) => age >= 18);
//   console.log(humanAges);
//   console.log(adultDogs);

//   const average =
//     adultDogs.reduce((acc, age) => acc + age, 0) / adultDogs.length;
//   return average;
// };
// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// console.log(avg1, avg2);
/////////////////////////

////////////////
//chaining methods
// const eurToUSD = 1.1;
// const totalDepositesUSD = movements
//   .filter((mov) => mov > 0)
//   .map((mov) => mov * eurToUSD)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositesUSD);
//////////////

////////////////////
//challenge 3
// const calcAverageHumanAge = (ages) =>
//   ages
//     .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter((age) => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);
/////////////////

//////////////////////
// //find method
// const firstWithdrawl = movements.find((mov) => mov < 0);

// console.log(movements);
// console.log(firstWithdrawl);

// console.log(accounts);

// const account = accounts.find((acc) => acc.owner === 'Jessica Davis');
// console.log(account);

// //with for of loop & arrow function
// let account;
// for (const acc of accounts) {
//   (acc) => acc.owner === 'Jessica Davis';
//   account = acc;
//   break;
// }

// console.log(account);
///////////////////////

/////////////////////
//some method

// console.log(movements);
// //equality
// console.log(movements.includes(-130));
// //condition
// console.log(movements.some((mov) => mov === -130));

// const anyDeposite = movements.some((mov) => mov > 0);
// console.log(anyDeposite);
////////////////////

// ///////////////////
// //every method
// console.log(movements.every((mov) => mov > 0));
// console.log(account4.movements.every((mov) => mov > 0));

// //seperate callback
// const deposit = (mov) => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));
/////////////////////////

/////////////
// //flat
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

// const overalBalance = accounts
//   .map((acc) => acc.movements)
//   .flat()
//   .reuce((acc, mov) => acc + mov, 0);
// /////////////

// ///////////
// //flat
// const overalBalance2 = accounts
//   .flatMap((acc) => acc.movements)
//   .reuce((acc, mov) => acc + mov, 0);

///////////////////////
//sorting arrays

// //string
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());
// console.log(owners);

// //Numbers
// console.log(movements);

// //return<0:A,B (keep order)
// //return>0:B.A (switch order)

// //ascending
// movements.sort((a, b) => a - b);
// //   if (a > b) return 1;
// //   if (b > a) return -1;
// // };
// console.log(movements);

// //descending
// movements.sort((a, b) => b - a);
// //   if (a > b) return -1;
// //   if (b > a) return 1;
// // };
// console.log(movements);
//////////////

///////////////////
//array.from
// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// //empty arrays +fill method
// const x = new Array(7);
// console.log(x);
// x.fill(1, 3, 5);
// x.fill(1);
// console.log(x);

// arr.fill(23, 2, 6);
// console.log(arr);

// //array.from
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     (el) => Number(el.textContent('€', ''))
//   );
//   console.log(movementsUI);

//   const movementsUI2 = [...document.querySelectorAll('.movments__value')];
// });
////////////////////////

//challenge 4
const dogs = [
  {
    weight: 22,
    curfood: 250,
    owners: ['Alice', 'Bob'],
  },
  {
    weight: 8,
    curfood: 200,
    owners: ['Matilda'],
  },
  {
    weight: 13,
    curfood: 275,
    owners: ['Sarah', 'John'],
  },
  {
    weight: 32,
    curfood: 340,
    owners: ['Michael'],
  },
];

//1.
dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

//2.
const dogSarah = dogs.find((dog) => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating ${
    dogSarah.curfood > dogSarah.recFood ? 'much' : 'little'
  }`
);

//3.
const ownersEatTooMuch = dogs
  .filter((dog) => dog.curfood > dog.recFood)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curfood < dog.recFood)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooLittle);

//4.
// "Matilda and Alice and Bob's dogs eat too much!"
// "Sarah's and John and Michael's dogs eat too little!"
console.log(`${ownersEatTooMuch.join(' and ')}dogs eat too much`);
console.log(`${ownersEatTooLittle.join(' and ')}dogs eat too little`);

//5.
console.log(dogs.some((dog) => dog.curfood === dog.recFood));

//6.
const checkEatingOkay = (dog) =>
  dog.curfood > dog.recFood * 0.9 && dog.curfood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay));

//7.
console.log(dogs.filter(checkEatingOkay));

//8.
const dogSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogSorted);
