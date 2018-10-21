"use strict";
class Food {
    constructor() {
    }
}
class Beans extends Food {
    constructor() {
        super();
        this.name = 'Beans';
        this.price = 4;
        this.hungerValue = 12;
        this.fat = 2;
        this.manufactured = new Date();
    }
}
