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
exports.SensordataValidator = void 0;
const class_validator_1 = require("class-validator");
const measurementUnitExistValidator_pipe_1 = require("../common/pipes/measurementUnitExistValidator.pipe");
const dataStreamExistValidator_pipe_1 = require("./pipes/dataStreamExistValidator.pipe");
const timestampFormtValidator_pipe_1 = require("./pipes/timestampFormtValidator.pipe");
class SensordataValidator {
}
__decorate([
    timestampFormtValidator_pipe_1.IsTimestampFormat({
        message: 'O campo timestamp, deve ser uma string seguindo o modelo: YYYY-MM-DD,HH:MM:SS'
    }),
    __metadata("design:type", Date)
], SensordataValidator.prototype, "timestamp", void 0);
__decorate([
    class_validator_1.IsNumber({}, {
        message: 'O campo valor, deve ser um number.'
    }),
    class_validator_1.IsNotEmpty({
        message: 'O campo valor, não deve ser vazio.'
    }),
    __metadata("design:type", Number)
], SensordataValidator.prototype, "value", void 0);
__decorate([
    class_validator_1.IsNumber({}, {
        message: 'O campo dataStreamId, deve ser um number.'
    }),
    class_validator_1.IsNotEmpty({
        message: 'O campo dataStreamId, não deve ser vazio.'
    }),
    dataStreamExistValidator_pipe_1.IsDataStreamExist({
        message: 'O campo dataStreamId, deve ser referenciado com um Id de um dataStream existente.'
    }),
    __metadata("design:type", Number)
], SensordataValidator.prototype, "dataStreamId", void 0);
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
], SensordataValidator.prototype, "measurementUnitId", void 0);
exports.SensordataValidator = SensordataValidator;
//# sourceMappingURL=sensordataValidator.model.js.map