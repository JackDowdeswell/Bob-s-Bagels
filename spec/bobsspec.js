//spec file
const Basket = require('../src/BobsBagels.js');
const assertEquals = require('../test-framework.js');

let basket1;

/*
console.log('Test 1: add 1 item to basket');
//Setup (Arrange)
basket1 = new Basket(0);

let input = ['Sesame Bagel'];
let expectedOutput = 1;

//Execute (Act)
let actualOutput = basket1.addToBasket(input);

//Verify (Assert)
let result = assertEquals(actualOutput, expectedOutput);
console.log(`Number of items added to the basket: ${input.length}`);
console.log(result);
*/

console.log('Test 2: add 2 items to basket');
//Setup (Arrange)
basket1 = new Basket(2);

let input = ['Sesame Bagel', 'Cheese Bagel'];
let expectedOutput = 4;

//Execute (Act)
let actualOutput = basket1.addToBasket(input);

//Verify (Assert)
let result = assertEquals(actualOutput, expectedOutput);
console.log(`Number of items added to the basket: ${input.length}`);
console.log(result);