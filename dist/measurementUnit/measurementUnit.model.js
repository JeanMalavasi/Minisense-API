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
exports.MeasurementUnit = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const dataStream_model_1 = require("../dataStream/dataStream.model");
const sensordata_model_1 = require("../SensorData/sensordata.model");
let MeasurementUnit = class MeasurementUnit extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING,
        unique: true,
        allowNull: false
    }),
    __metadata("design:type", String)
], MeasurementUnit.prototype, "symbol", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING(60),
        allowNull: false
    }),
    __metadata("design:type", String)
], MeasurementUnit.prototype, "description", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => sensordata_model_1.SensorData),
    __metadata("design:type", sensordata_model_1.SensorData)
], MeasurementUnit.prototype, "sensorData", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => dataStream_model_1.DataStream),
    __metadata("design:type", dataStream_model_1.DataStream)
], MeasurementUnit.prototype, "dataStream", void 0);
MeasurementUnit = __decorate([
    sequelize_typescript_1.Table
], MeasurementUnit);
exports.MeasurementUnit = MeasurementUnit;
//# sourceMappingURL=measurementUnit.model.js.map