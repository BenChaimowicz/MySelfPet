enum Status {
    idle,
    sleeping,
    eating,
    playing,
    dying,
    jumping,
    sick
}

class Pet {
    private static readonly MaxHunger: number = 100;
    private static readonly MaxHealth: number = 100;
    private static readonly MaxFun: number = 100;
    private static readonly FatStep: number = 5;

    private _name: string;
    private _hunger: number = 80;
    private _health: number = 100;
    private _fun: number = 50;
    private _fat: number = 0;
    private _money: number = 100;
    private _inventoryFood: Food[] = [];
    private _inventoryToys: Toy[] = [];
    private _status: Status = Status.idle;
    private _baseImageURL: string;

    constructor() {
        
    }

    public get name(): string{
        return this._name;
    }
    public get hunger(): number{
        return this._hunger;
    }
    public get health(): number{
        return this._health;
    }
    public get fun(): number{
        return this._fun;
    }
    public get fat(): number{
        return this._fat;
    }
    public get money(): number {
        return this._money;
    }
    public get inventoryFood():Food[]{
        return this._inventoryFood;
    }
    public get inventoryToys(): Toy[]{
        return this._inventoryToys;
    }
    public get status(): Status{
        return this._status;
    }

    public feed(food: Food) {
        this._hunger += food.hungerValue;

        if (food.expiration > new Date()) {
            this._status = Status.sick;
        }
    }
    public play(toy: Toy) {
        this._fun += toy.fun;
        toy.use();
    }
}