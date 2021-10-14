class Basket {

    // properties
    //numberOfItems = 0;
    basket = new Array();
    maxCapacity = 0;

    constructor(/*numberOfItems*/basket = [], maxCapacity) {
        // set values for object instance
        //this.numberOfItems = numberOfItems;
        this.basket = basket;
        this.maxCapacity = maxCapacity;
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

    increaseBasketCapacity(items) {
        if (this.maxCapacity < (this.basket.length + items.length)) {
            this.maxCapacity += items.length;
        }
        return this.maxCapacity
    }

    checkIfItemExists(items) {
        for (let i = 0; i < items.length; i++) { 
            if (items[i].indexOf('Sesame Bagel') > -1) {
                console.log("Item is already in basket");
                return true;
            } else {
                console.log('Item is not in basket');
                return false;
            }
        }
    }
}

module.exports = Basket;