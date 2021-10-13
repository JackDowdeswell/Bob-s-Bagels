//spec file
const Basket = require('../src/BobsBagels.js');
const assertEquals = require('../test-framework.js');

let basket1;

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