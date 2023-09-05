// function sayHello() {
//   return new Promise((resolve, reject) => {
//     resolve('hello');
//   });
// }

// sayHello()
//   .then((res1) => res1.split(''))
//   .then((res2) => res2.reverse())
//   .then((res3) => res3.join(''))
//   .then((final) => console.log(final));

//     ////////////////////////////////////////////

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const randomNumber = Math.random();
//     console.log(randomNumber);
//     if (randomNumber < 0.5) {
//       resolve();
//     } else {
//       reject();
//     }
//   }, 2000);
// });

// myPromise
//   .then(() => {
//     console.log('its resolved');
//   })
//   .catch(() => {
//     console.log('its rejected');
//   });

/////////////////////////////////////

// async function getData() {
//   try {
//     const data = await new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const randomNumber = Math.random();
//         console.log(randomNumber);
//         if (randomNumber < 0.5) {
//           resolve('Data retrieved successfully!');
//         } else {
//           reject();
//         }
//       }, 2000);
//     });
//     console.log(data);
//   } catch {
//     console.log('There is something wrong with your code');
//   }
// }

// getData();
