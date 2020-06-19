import { IPredator } from './ipredator.interface';
import { Animal } from './animal';
import { PredatorFoodModel } from './predator.food.model';

export class Orso extends Animal implements IPredator{
    private readonly _paws: number = 4;
    private _id: any;
    private _predatorFoodPreferences: PredatorFoodModel[];

    get paws() {
        return this._paws;
    }

    get id() {
        return this._id;
    }

    get foodPreferences() {
        return this._predatorFoodPreferences;
    }

    constructor(name) {
        super(name);
    }

    public eatMeat(amount: number) {
        this._energyLevel += amount;
    }

    public makeSound(): string {
        return 'Brrrrr!';
    }

    public generateId<T>(arg: T): void {
        this._id = arg;
    }
}