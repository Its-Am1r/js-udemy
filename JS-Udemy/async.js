// function sayHello(data) {
//   return new Promise((resolve, reject) => {
//     if (typeof data === 'string') {
//       resolve(data);
//     } else {
//       reject(data);
//     }
//   });
// }

// sayHello('Ali')
//   .then((res1) => res1.split(''))
//   .then((res2) => res2.reverse())
//   .then((res3) => res3.join(''))
//   .then((final) => console.log(final))
//   .catch(() => {
//     console.log('Wrtie a string');
//   });

//     ////////////////////////////////////////////

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const randomNumber = Math.random();

//     if (randomNumber < 0.5) {
//       resolve(randomNumber);
//     } else {
//       reject(randomNumber);
//     }
//   }, 2000);
// });

// myPromise
//   .then((randomNumber) => {
//     console.log('its resolved', randomNumber);
//   })
//   .catch((randomNumber) => {
//     console.log('its rejected', randomNumber);
//   });

//////////////////////////////////////

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const randomNumber = Math.random();
//     if (randomNumber < 0.5) {
//       resolve(randomNumber);
//     } else {
//       reject(randomNumber);
//     }
//   }, 2000);
// });

// async function consumePromise() {
//   try {
//     const result = await myPromise;
//     console.log('Promise resolved', result);
//   } catch {
//     console.log('Promise rejected', result);
//   }
// }

// consumePromise();

///////////////////////////////////
// async function DataJohn() {
//   try {
//     function fetchData() {
//       return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           const data = { username: 'John Doe', age: 25 };
//           if (data.username === 'John Doe' && data.age === 25) {
//             resolve(data);
//           } else {
//             reject();
//           }
//         }, 2000);
//       });
//     }

//     const result = await fetchData();
//     console.log('Data:', result);
//   } catch {
//     console.log('Its Not The Data you wanted');
//   }
// }

// DataJohn();

///////////////////////////////////
