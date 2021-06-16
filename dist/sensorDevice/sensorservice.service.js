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
exports.SensorDeviceService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const sequelize_2 = require("sequelize");
const dataStream_model_1 = require("../dataStream/dataStream.model");
const sensordata_model_1 = require("../SensorData/sensordata.model");
const sensorDevice_model_1 = require("./sensorDevice.model");
let SensorDeviceService = class SensorDeviceService {
    constructor(sensorDeviceModel) {
        this.sensorDeviceModel = sensorDeviceModel;
    }
    async getAll() {
        return this.sensorDeviceModel.findAll({
            attributes: ['id', 'key', 'label', 'description', 'userId']
        });
    }
    async getAllSensorThisUser(userId) {
        return this.sensorDeviceModel.findAll({
            where: {
                userID: userId
            },
            include: [
                {
                    model: dataStream_model_1.DataStream,
                    include: [
                        {
                            model: sensordata_model_1.SensorData,
                            attributes: []
                        }
                    ],
                    attributes: [
                        'id', 'key', 'label', 'measurementUnitId', 'sensorDeviceId'
                    ],
                }
            ],
            attributes: [
                'id', 'key', 'label', 'description', 'userId'
            ]
        });
    }
    async getOneById(id) {
        return this.sensorDeviceModel.findOne({
            where: {
                id: id
            },
            include: [
                {
                    model: dataStream_model_1.DataStream,
                    attributes: [
                        'id', 'key', 'measurementUnitId', 'label', 'enabled'
                    ],
                    include: [
                        {
                            model: sensordata_model_1.SensorData,
                            limit: 5,
                            order: [['createdAt', 'DESC']],
                            attributes: ['timestamp', 'value']
                        }
                    ]
                }
            ],
            attributes: ['id', 'key', 'label', 'description']
        });
    }
    async create(sensorDevice) {
        const labelExist = await this.sensorDeviceModel.findOne({
            where: {
                [sequelize_2.Op.and]: [{ userId: sensorDevice.userId }, { label: sensorDevice.label }]
            }
        });
        if (labelExist) {
            return;
        }
        const response = await this.sensorDeviceModel.create(sensorDevice, {
            fields: ['label', 'key', 'description', 'userId']
        });
        var { label, key, description } = response;
        var json = {
            "label": label,
            "key": key,
            "description": description,
        };
        return json;
    }
    async update(sensorDevice) {
        return this.sensorDeviceModel.update(sensorDevice, {
            where: {
                id: sensorDevice.id
            },
            fields: ['label', 'description']
        });
    }
    async delteOneById(id) {
        const sensorDevice = await this.sensorDeviceModel.findByPk(id, {
            attributes: ['id', 'label', 'key', 'description']
        });
        if (sensorDevice) {
            sensorDevice.destroy();
        }
        return sensorDevice;
    }
};
SensorDeviceService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(sensorDevice_model_1.SensorDevice)),
    __metadata("design:paramtypes", [Object])
], SensorDeviceService);
exports.SensorDeviceService = SensorDeviceService;
//# sourceMappingURL=sensorservice.service.js.map