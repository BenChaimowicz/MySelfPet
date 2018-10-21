"use strict";
class Toy {
    constructor() {
    }
    use() {
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
