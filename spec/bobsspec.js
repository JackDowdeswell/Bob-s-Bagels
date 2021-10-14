//spec file
const Basket = require('../src/BobsBagels.js');
const assertEquals = require('../test-framework.js');

let basket1;
let basketArray = new Array();

console.log('Test 1: add 1 item to basket');
//Setup (Arrange)
basket1 = new Basket(basketArray);

let input = ['Sesame Bagel'];
let expectedOutput = 1;

//Execute (Act)
let actualOutput = basket1.addToBasket(input);

//Verify (Assert)
let result = assertEquals(actualOutput, expectedOutput);
console.log(`Number of items added to the basket: ${input.length}.\nNumber of items now in the basket: ${actualOutput}.`);
console.log(result);


console.log('Test 2: remove an item from my basket');
//Setup (Arrange)
basketArray = ['Test', 'Test2'];
basket1 = new Basket(basketArray);

input = ['Sesame Bagel'];
expectedOutput = 0;

//Execute (Act)
actualOutput = basket1.removeFromBasket(input);

//Verify (Assert)
result = assertEquals(actualOutput, expectedOutput);
console.log(`Number of items in the basket: ${input.length}.\nNumber of items now in the basket: ${actualOutput}.`);
console.log(result);



console.log('Test 3: check if basket is full');
//Setup (Arrange)
basketArray = ['Test'];
basket1 = new Basket(basketArray, 1);

input = ['Sesame Bagel'];
expectedOutput = true;

//Execute (Act)
actualOutput = basket1.isBasketFull(input);

//Verify (Assert)
result = assertEquals(actualOutput, expectedOutput);
console.log(`Is Basket Full?: ${actualOutput}.`);
console.log(result);