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
exports.SensorDataService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const sensordata_model_1 = require("./sensordata.model");
let SensorDataService = class SensorDataService {
    constructor(sensorDataModel) {
        this.sensorDataModel = sensorDataModel;
    }
    async getAll() {
        return this.sensorDataModel.findAll({
            attributes: ['id', 'timestamp', 'value', 'dataStreamId', 'measurementUnitId']
        });
    }
    async getAllSensorThisDataStreamId(dataStremId) {
        return this.sensorDataModel.findAll({
            where: {
                dataStreamId: dataStremId
            },
            attributes: ['id', 'timestamp', 'value', 'dataStreamId', 'measurementUnitId']
        });
    }
    async getOneById(id) {
        return await this.sensorDataModel.findByPk(id, {
            attributes: ['id', 'timestamp', 'value', 'dataStreamId', 'measurementUnitId']
        });
    }
    async create(sensorData) {
        const response = await this.sensorDataModel.create(sensorData, {
            fields: ['timestamp', 'value', 'dataStreamId', 'measurementUnitId'],
        });
        var { timestamp, value } = response;
        var json = {
            "timestamp": timestamp,
            "value": value
        };
        return json;
    }
    async deleteOneById(id) {
        const sensordataUpdate = await this.sensorDataModel.findByPk(id);
        if (sensordataUpdate) {
            sensordataUpdate.destroy();
        }
        return sensordataUpdate;
    }
};
SensorDataService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(sensordata_model_1.SensorData)),
    __metadata("design:paramtypes", [Object])
], SensorDataService);
exports.SensorDataService = SensorDataService;
//# sourceMappingURL=sensordata.service.js.map