"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsSymbolUnique = exports.IsSymbolUniqueConstranint = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const class_validator_1 = require("class-validator");
const measurementUnit_model_1 = require("../measurementUnit.model");
let IsSymbolUniqueConstranint = class IsSymbolUniqueConstranint {
    constructor(measurementUnitModel) {
        this.measurementUnitModel = measurementUnitModel;
    }
    async validate(symbol, args) {
        if (symbol) {
            return await this.measurementUnitModel.findOne({
                where: {
                    symbol: symbol
                }
            }) ? false : true;
        }
        return true;
    }
};
IsSymbolUniqueConstranint = __decorate([
    common_1.Injectable(),
    class_validator_1.ValidatorConstraint(),
    __param(0, sequelize_1.InjectModel(measurementUnit_model_1.MeasurementUnit)),
    __metadata("design:paramtypes", [Object])
], IsSymbolUniqueConstranint);
exports.IsSymbolUniqueConstranint = IsSymbolUniqueConstranint;
function IsSymbolUnique(validationOptions) {
    return function (object, propertyName) {
        class_validator_1.registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsSymbolUniqueConstranint,
        });
    };
}
exports.IsSymbolUnique = IsSymbolUnique;
//# sourceMappingURL=symbolUniqueValidator.pipe.js.map