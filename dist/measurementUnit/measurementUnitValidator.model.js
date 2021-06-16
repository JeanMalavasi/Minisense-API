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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeasurementUnitValidator = void 0;
const class_validator_1 = require("class-validator");
const symbolUniqueValidator_pipe_1 = require("./pipes/symbolUniqueValidator.pipe");
class MeasurementUnitValidator {
}
__decorate([
    class_validator_1.IsString({
        message: 'O campo simbolo, deve ser uma string.'
    }),
    class_validator_1.IsNotEmpty({
        message: 'O campo simbolo, não deve ser vazio.'
    }),
    symbolUniqueValidator_pipe_1.IsSymbolUnique({
        message: 'Este simbolo já esta em uso, troque por um ainda não cadastrado.'
    }),
    __metadata("design:type", String)
], MeasurementUnitValidator.prototype, "symbol", void 0);
__decorate([
    class_validator_1.IsString({
        message: 'O campo descrição, deve ser uma string.'
    }),
    class_validator_1.IsNotEmpty({
        message: 'O campo descrição, não deve ser vazio.'
    }),
    __metadata("design:type", String)
], MeasurementUnitValidator.prototype, "description", void 0);
exports.MeasurementUnitValidator = MeasurementUnitValidator;
//# sourceMappingURL=measurementUnitValidator.model.js.map