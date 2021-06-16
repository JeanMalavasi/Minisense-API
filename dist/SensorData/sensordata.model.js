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
exports.SensorData = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const dataStream_model_1 = require("../dataStream/dataStream.model");
const measurementUnit_model_1 = require("../measurementUnit/measurementUnit.model");
let SensorData = class SensorData extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: false
    }),
    __metadata("design:type", Date)
], SensorData.prototype, "timestamp", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING(60),
        allowNull: false
    }),
    __metadata("design:type", Number)
], SensorData.prototype, "value", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => dataStream_model_1.DataStream),
    sequelize_typescript_1.Column({
        allowNull: false,
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Number)
], SensorData.prototype, "dataStreamId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => dataStream_model_1.DataStream),
    __metadata("design:type", dataStream_model_1.DataStream)
], SensorData.prototype, "dataStream", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => measurementUnit_model_1.MeasurementUnit),
    sequelize_typescript_1.Column({
        allowNull: false,
    }),
    __metadata("design:type", Number)
], SensorData.prototype, "measurementUnitId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => measurementUnit_model_1.MeasurementUnit),
    __metadata("design:type", measurementUnit_model_1.MeasurementUnit)
], SensorData.prototype, "measurementUnit", void 0);
SensorData = __decorate([
    sequelize_typescript_1.Table
], SensorData);
exports.SensorData = SensorData;
//# sourceMappingURL=sensordata.model.js.map