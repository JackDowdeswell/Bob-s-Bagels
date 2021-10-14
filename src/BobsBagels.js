class Basket {

    // properties
    //numberOfItems = 0;
    basket = new Array();

    constructor(/*numberOfItems*/basket = []) {
        // set values for object instance
        //this.numberOfItems = numberOfItems;
        this.basket = basket;
    }

    // messages
    addToBasket(items) {
        for (let i = 0, j = items.length; i < j; i++) {
            this.basket.push(items[i]);
            console.log(items[i]);
        }
        return this.basket.length;
    }

    removeFromBasket(items) {
        for (let i = 0, j = items.length; i < j; i++) {
            this.basket.splice(items[i]);
            console.log(items[i]);
        }
        return this.basket.length;
    }

    isBasketFull(items) {
        if (this.basket.length >= 1) {
            console.log('Basket is at max capacity')
            return true;
            
        }
        else {
            console.log('Basket is empty')
            return false;
        }
    }
}

module.exports = Basket;