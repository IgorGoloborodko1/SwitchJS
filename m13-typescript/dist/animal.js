"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(name) {
        this._energyLevel = 0;
        this._name = name;
    }
    Object.defineProperty(Animal.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "energyLevel", {
        get: function () {
            return this._energyLevel;
        },
        enumerable: false,
        configurable: true
    });
    Animal.prototype.eat = function (amount) {
        this._energyLevel += amount;
    };
    return Animal;
}());
exports.Animal = Animal;
