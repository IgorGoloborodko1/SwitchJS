export abstract class Animal{
    private readonly _name: string;
    protected _energyLevel: number = 0;

    get name() {
        return this._name;
    }

    get energyLevel() {
        return this._energyLevel
    }

    constructor(name: string) {
        this._name = name;
    }

    public eat(amount: number): void {
        this._energyLevel+= amount;
    }
}