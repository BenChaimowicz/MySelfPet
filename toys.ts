class Toy {
    name: string;
    price: number;
    imageURL: string;
    fun: number;
    uses: number;

    constructor() {

    }
}

class Stick extends Toy {

    private _usesLeft: number;

    constructor() {
        super();
        this.name = 'Stick';
        this.price = 4;
        this.fun = 10;
        this.uses = 4;
        this._usesLeft = this.uses;
    }

    public use() {
        if (this._usesLeft > 0) {
            this._usesLeft--;
        }
    }
}