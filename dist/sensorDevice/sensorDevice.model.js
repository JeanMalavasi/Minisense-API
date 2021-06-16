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
exports.SensorDevice = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const dataStream_model_1 = require("../dataStream/dataStream.model");
const user_model_1 = require("../user/user.model");
let SensorDevice = class SensorDevice extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING,
        unique: true,
        allowNull: false
    }),
    __metadata("design:type", String)
], SensorDevice.prototype, "key", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING(60),
        allowNull: false,
        unique: 'compose'
    }),
    __metadata("design:type", String)
], SensorDevice.prototype, "label", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING(60),
        allowNull: false
    }),
    __metadata("design:type", String)
], SensorDevice.prototype, "description", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => user_model_1.User),
    sequelize_typescript_1.Column({
        allowNull: false,
        onDelete: 'CASCADE',
        unique: 'compose'
    }),
    __metadata("design:type", Number)
], SensorDevice.prototype, "userId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => user_model_1.User),
    __metadata("design:type", user_model_1.User)
], SensorDevice.prototype, "user", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => dataStream_model_1.DataStream),
    __metadata("design:type", dataStream_model_1.DataStream)
], SensorDevice.prototype, "dataStreamId", void 0);
SensorDevice = __decorate([
    sequelize_typescript_1.Table
], SensorDevice);
exports.SensorDevice = SensorDevice;
//# sourceMappingURL=sensorDevice.model.js.map