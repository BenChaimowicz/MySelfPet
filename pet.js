"use strict";
var Status;
(function (Status) {
    Status[Status["idle"] = 0] = "idle";
    Status[Status["sleeping"] = 1] = "sleeping";
    Status[Status["eating"] = 2] = "eating";
    Status[Status["playing"] = 3] = "playing";
    Status[Status["dying"] = 4] = "dying";
    Status[Status["jumping"] = 5] = "jumping";
    Status[Status["sick"] = 6] = "sick";
})(Status || (Status = {}));
class Pet {
    constructor() {
        this._hunger = 80;
        this._health = 100;
        this._fun = 50;
        this._fat = 0;
        this._money = 100;
        this._inventoryFood = [];
        this._inventoryToys = [];
        this._status = Status.idle;
    }
    get name() {
        return this._name;
    }
    get hunger() {
        return this._hunger;
    }
    get health() {
        return this._health;
    }
    get fun() {
        return this._fun;
    }
    get fat() {
        return this._fat;
    }
    get money() {
        return this._money;
    }
    get inventoryFood() {
        return this._inventoryFood;
    }
    get inventoryToys() {
        return this._inventoryToys;
    }
    get status() {
        return this._status;
    }
    feed(food) {
        this._hunger += food.hungerValue;
        if (food.expiration > new Date()) {
            this._status = Status.sick;
        }
    }
    play(toy) {
        this._fun += toy.fun;
        toy.use();
    }
}
Pet.MaxHunger = 100;
Pet.MaxHealth = 100;
Pet.MaxFun = 100;
Pet.FatStep = 5;
