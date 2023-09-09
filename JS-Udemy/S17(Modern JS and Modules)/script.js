//IMPORTING MODULES
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);

import shoppingCart from './shoppingCart';

// console.log('IMPORTING MODULES');
// // console.log(ShippingCost);

// // import * as ShoppingCart from './shoppingCart.js';
// // ShoppingCart.addToCart('bread', 5);
// // console.log(ShoppingCart.totalPrice);

// // import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// import add, { cart } from './shoppingCart.js';
// add('pizza', 2);
// add('bread', 5);
// add('apple', 4);

// console.log(cart);

// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(
    `${quantity} ${product} added to cart(shipping cost is ${shippingCost})`
  );
};

//   const orderStuck = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} Ordered from supplier`);
//   };
//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// ShoppingCart2.addToCart('apple', 4);
// ShoppingCart2.addToCart('pizza', 4);
// console.log(ShoppingCart2);
