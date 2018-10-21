"use strict";
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
}
Pet.MaxHunger = 100;
Pet.MaxHealth = 100;
Pet.MaxFun = 100;
Pet.FatStep = 5;
