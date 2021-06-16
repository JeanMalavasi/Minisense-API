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
exports.SensorDeviceValidator = void 0;
const class_validator_1 = require("class-validator");
const userExistValidator_pipe_1 = require("./pipes/userExistValidator.pipe");
class SensorDeviceValidator {
}
__decorate([
    class_validator_1.IsString({
        message: 'O campo apelido, deve ser uma string.'
    }),
    class_validator_1.IsNotEmpty({
        message: 'O campo apelido, não deve ser vazio.'
    }),
    __metadata("design:type", String)
], SensorDeviceValidator.prototype, "label", void 0);
__decorate([
    class_validator_1.IsString({
        message: 'O campo descrição, deve ser uma string.'
    }),
    class_validator_1.IsNotEmpty({
        message: 'O campo descrição, não deve ser vazio.'
    }),
    __metadata("design:type", String)
], SensorDeviceValidator.prototype, "description", void 0);
__decorate([
    class_validator_1.IsNumber({}, {
        message: 'O campo userId, deve ser um number.'
    }),
    userExistValidator_pipe_1.IsUserExist({
        message: 'O campo userId, deve ser referenciado com um Id de um usuario existente.'
    }),
    __metadata("design:type", Number)
], SensorDeviceValidator.prototype, "userId", void 0);
exports.SensorDeviceValidator = SensorDeviceValidator;
//# sourceMappingURL=sensorDeviceValidator.model.js.map