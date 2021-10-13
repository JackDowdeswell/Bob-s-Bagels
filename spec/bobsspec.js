//spec file
const Basket = require('../src/BobsBagels.js');

let basket;

//Setup (Arrange)
basket = new Basket(0);

let input = ['Sesame Bagel'];
let expectedOutput = 1;

//Execute (Act)
let actualOutput = addToBasket(input);

//Verify (Assert)
let result = assertEquals(actualOutput, expectedOutput);
console.log(`Number of items added to the basket: ${input.length}`);
console.log(result);