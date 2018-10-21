class Toy {
    name: string;
    price: number;
    imageURL: string;
    fun: number;
    uses: number;
    maxUses: number;


    constructor() {
    }

    public use() {
        if (this.uses > 0) {
            this.uses--;
        }
    }
}

class Stick extends Toy {

    constructor() {
        super();
        this.name = 'Stick';
        this.price = 4;
        this.fun = 10;
        this.uses = 4;
        this.maxUses = this.uses;
    }

}