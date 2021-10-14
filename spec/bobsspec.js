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


console.log('Test 2: add 2 items to basket');
//Setup (Arrange)
basketArray = ['Test', 'Test2'];
basket1 = new Basket(basketArray);

input = ['Sesame Bagel', 'Cheese Bagel'];
expectedOutput = 4;

//Execute (Act)
actualOutput = basket1.addToBasket(input);

//Verify (Assert)
result = assertEquals(actualOutput, expectedOutput);
console.log(`Number of items added to the basket: ${input.length}.\nNumber of items now in the basket: ${actualOutput}.`);
console.log(result);



console.log('Test 3: add 3 items to basket');
//Setup (Arrange)
basketArray = ['Test', 'Test2'];
basket1 = new Basket(basketArray);

input = ['Sesame Bagel', 'Cheese Bagel', 'Poppy Seed Bagel'];
expectedOutput = 5;

//Execute (Act)
actualOutput = basket1.addToBasket(input);

//Verify (Assert)
result = assertEquals(actualOutput, expectedOutput);
console.log(`Number of items added to the basket: ${input.length}.\nNumber of items now in the basket: ${actualOutput}.`);
console.log(result);