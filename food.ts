class Food {
    name: string;
    price: number;
    imageURL: string;
    hungerValue: number;
    fat: number;
    expiration: Date;
    manufactured: Date;

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