"use strict";
class Toy {
    constructor() {
    }
}
class Stick extends Toy {
    constructor() {
        super();
        this.name = 'Stick';
        this.price = 4;
        this.fun = 10;
        this.uses = 4;
        this._usesLeft = this.uses;
    }
    use() {
        if (this._usesLeft > 0) {
            this._usesLeft--;
        }
    }
}
