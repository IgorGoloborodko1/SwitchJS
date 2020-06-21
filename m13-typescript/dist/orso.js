"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orso = void 0;
var animal_1 = require("./animal");
var Orso = /** @class */ (function (_super) {
    __extends(Orso, _super);
    function Orso(name) {
        var _this = _super.call(this, name) || this;
        _this._paws = 4;
        return _this;
    }
    Object.defineProperty(Orso.prototype, "paws", {
        get: function () {
            return this._paws;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Orso.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Orso.prototype, "foodPreferences", {
        get: function () {
            return this._predatorFoodPreferences;
        },
        enumerable: false,
        configurable: true
    });
    Orso.prototype.eatMeat = function (amount) {
        this._energyLevel += amount;
    };
    Orso.prototype.makeSound = function () {
        return 'Brrrrr!';
    };
    Orso.prototype.generateId = function (arg) {
        this._id = arg;
    };
    return Orso;
}(animal_1.Animal));
exports.Orso = Orso;
