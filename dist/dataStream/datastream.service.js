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
exports.DataStreamService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const sequelize_2 = require("sequelize");
const measurementUnit_model_1 = require("../measurementUnit/measurementUnit.model");
const sensordata_model_1 = require("../SensorData/sensordata.model");
const dataStream_model_1 = require("./dataStream.model");
let DataStreamService = class DataStreamService {
    constructor(dataStreamModel) {
        this.dataStreamModel = dataStreamModel;
    }
    async getAll() {
        return this.dataStreamModel.findAll({
            attributes: ['id', 'key', 'label', 'enabled', 'sensorDeviceId', 'measurementUnitId']
        });
    }
    async getOneById(id) {
        return await this.dataStreamModel.findByPk(id, {
            include: [
                {
                    model: measurementUnit_model_1.MeasurementUnit,
                    attributes: ['id', 'symbol']
                },
                {
                    model: sensordata_model_1.SensorData,
                    attributes: ['timestamp', 'value']
                }
            ],
            attributes: ['id', 'key', 'label', 'enabled', 'sensorDeviceId']
        });
    }
    async create(dataStream) {
        const measurementUnitExist = await this.dataStreamModel.findOne({
            where: {
                [sequelize_2.Op.and]: [{ sensorDeviceId: dataStream.sensorDeviceId }, { measurementUnitId: dataStream.measurementUnitId }]
            }
        });
        if (measurementUnitExist) {
            return;
        }
        const response = await this.dataStreamModel.create(dataStream, {
            fields: ['key', 'label', 'enabled', 'sensorDeviceId', 'measurementUnitId']
        });
        var { key, label, enabled } = response;
        var json = {
            "key": key,
            "label": label,
            "enabled": enabled,
        };
        return json;
    }
    async update(dataStream) {
        return this.dataStreamModel.update(dataStream, {
            where: {
                id: dataStream.id
            },
            fields: ['label', 'enabled', 'measurementUnitId']
        });
    }
    async deleteOneById(id) {
        const dataStreamDeleted = await this.dataStreamModel.findByPk(id, {
            attributes: ['id', 'key', 'label', 'enabled', 'sensorDeviceId', 'measurementUnitId']
        });
        if (dataStreamDeleted) {
            dataStreamDeleted.destroy();
        }
        return dataStreamDeleted;
    }
};
DataStreamService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(dataStream_model_1.DataStream)),
    __metadata("design:paramtypes", [Object])
], DataStreamService);
exports.DataStreamService = DataStreamService;
//# sourceMappingURL=datastream.service.js.map