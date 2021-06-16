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
exports.DataStreamValidator = void 0;
const class_validator_1 = require("class-validator");
const measurementUnitExistValidator_pipe_1 = require("../common/pipes/measurementUnitExistValidator.pipe");
const sensorDeviceExistValidator_pipe_1 = require("./pipes/sensorDeviceExistValidator.pipe");
class DataStreamValidator {
}
__decorate([
    class_validator_1.IsString({
        message: 'O campo apelido, deve ser uma string.'
    }),
    class_validator_1.IsNotEmpty({
        message: 'O campo apelido, não deve ser vazio.'
    }),
    __metadata("design:type", String)
], DataStreamValidator.prototype, "label", void 0);
__decorate([
    class_validator_1.IsNumber({}, {
        message: 'O campo sensorDeviceId, deve ser um number.'
    }),
    class_validator_1.IsNotEmpty({
        message: 'O campo sensorDeviceId, não deve ser vazio.'
    }),
    sensorDeviceExistValidator_pipe_1.IsSensorDeviceExist({
        message: 'O campo sensorDeviceId, deve ser referenciado com um Id de um sensorDevice existente.'
    }),
    __metadata("design:type", Number)
], DataStreamValidator.prototype, "sensorDeviceId", void 0);
__decorate([
    class_validator_1.IsNumber({}, {
        message: 'O campo measurementUnitId, deve ser um number.'
    }),
    class_validator_1.IsNotEmpty({
        message: 'O campo measurementUnitId, não deve ser vazio.'
    }),
    measurementUnitExistValidator_pipe_1.IsMeasurementUnitExist({
        message: 'O campo measurementUnitId, deve ser referenciado com um Id de um measurementUnit existente.'
    }),
    __metadata("design:type", Number)
], DataStreamValidator.prototype, "measurementUnitId", void 0);
exports.DataStreamValidator = DataStreamValidator;
//# sourceMappingURL=dataStreamValidator.model.js.map