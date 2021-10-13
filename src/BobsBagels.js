class Basket {

    // properties
    numberOfItems = 1;
    basket;

    constructor(numberOfItems, Basket) {
        // set values for object instance
        this.numberOfItems = numberOfItems;
        this.basket = Basket;
    }

    // messages
    //numberOfItems() { }
}

module.exports = Basket;