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
exports.DataStream = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const measurementUnit_model_1 = require("../measurementUnit/measurementUnit.model");
const sensordata_model_1 = require("../SensorData/sensordata.model");
const sensorDevice_model_1 = require("../sensorDevice/sensorDevice.model");
let DataStream = class DataStream extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING,
        unique: true,
        allowNull: false
    }),
    __metadata("design:type", String)
], DataStream.prototype, "key", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING(60),
        allowNull: false
    }),
    __metadata("design:type", String)
], DataStream.prototype, "label", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING(60),
        allowNull: false,
    }),
    __metadata("design:type", Boolean)
], DataStream.prototype, "enabled", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => sensorDevice_model_1.SensorDevice),
    sequelize_typescript_1.Column({
        allowNull: false,
        onDelete: 'CASCADE',
        unique: 'compose'
    }),
    __metadata("design:type", Number)
], DataStream.prototype, "sensorDeviceId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => sensorDevice_model_1.SensorDevice),
    __metadata("design:type", sensorDevice_model_1.SensorDevice)
], DataStream.prototype, "sensorDevice", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => measurementUnit_model_1.MeasurementUnit),
    sequelize_typescript_1.Column({
        allowNull: true,
        onDelete: 'SET NULL',
        unique: 'compose'
    }),
    __metadata("design:type", Number)
], DataStream.prototype, "measurementUnitId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => measurementUnit_model_1.MeasurementUnit),
    __metadata("design:type", measurementUnit_model_1.MeasurementUnit)
], DataStream.prototype, "measurementUnit", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => sensordata_model_1.SensorData),
    __metadata("design:type", sensordata_model_1.SensorData)
], DataStream.prototype, "sensordata", void 0);
DataStream = __decorate([
    sequelize_typescript_1.Table
], DataStream);
exports.DataStream = DataStream;
//# sourceMappingURL=dataStream.model.js.map