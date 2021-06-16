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
exports.SensorDataController = void 0;
const common_1 = require("@nestjs/common");
const timestampTransform_pipe_1 = require("./pipes/timestampTransform.pipe");
const sensordata_service_1 = require("./sensordata.service");
const sensordataValidator_model_1 = require("./sensordataValidator.model");
let SensorDataController = class SensorDataController {
    constructor(sensorDataService) {
        this.sensorDataService = sensorDataService;
    }
    async getAll(res) {
        const sensorDataSearched = await this.sensorDataService.getAll();
        if (!sensorDataSearched.length) {
            throw new common_1.NotFoundException({
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'Não há nenhum dado de sensor cadastrado no banco, não foi possivel busca-los.'
            });
        }
        res.status(common_1.HttpStatus.OK)
            .location(`/sensordata`)
            .json(sensorDataSearched);
    }
    async getAllSensorThisDataStreamId(params, res) {
        const sensorDataSearched = await this.sensorDataService.getAllSensorThisDataStreamId(params.streamId);
        if (!sensorDataSearched.length) {
            throw new common_1.NotFoundException({
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'o Id de Stream informado, não possui nenhum dado de sensor associado, não foi possivel busca-los.'
            });
        }
        res.status(common_1.HttpStatus.OK)
            .location(`/sensordata/datastream/${params.streamId}`)
            .json(sensorDataSearched);
    }
    async getOneById(params, res) {
        const sensorDataSearched = await this.sensorDataService.getOneById(params.id);
        if (!sensorDataSearched) {
            throw new common_1.NotFoundException({
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'Id informado não corresponde a nenhum dado de sensor no banco, não foi possivel busca-lo.'
            });
        }
        res.status(common_1.HttpStatus.OK)
            .location(`/sensordata/${params.id}`)
            .json(sensorDataSearched);
    }
    async create(body, res) {
        const sensorDataCreated = await this.sensorDataService.create(body);
        res.status(common_1.HttpStatus.CREATED)
            .location(`/sensordata/${body.dataStreamId}`)
            .json(sensorDataCreated);
    }
    async deleteOneById(params, res) {
        const sensorDataDeleted = await this.sensorDataService.deleteOneById(params.id);
        if (!sensorDataDeleted) {
            throw new common_1.NotFoundException({
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'O id informado não corresponde a nenhum dado de sensor, não foi possivel deleta-lo.'
            });
        }
        res.status(common_1.HttpStatus.OK)
            .location(`/sensordata/${params.id}`)
            .json(sensorDataDeleted);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SensorDataController.prototype, "getAll", null);
__decorate([
    common_1.Get('datastream/:streamId'),
    __param(0, common_1.Param()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SensorDataController.prototype, "getAllSensorThisDataStreamId", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SensorDataController.prototype, "getOneById", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body(new timestampTransform_pipe_1.TimestampTransform())), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sensordataValidator_model_1.SensordataValidator, Object]),
    __metadata("design:returntype", Promise)
], SensorDataController.prototype, "create", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SensorDataController.prototype, "deleteOneById", null);
SensorDataController = __decorate([
    common_1.Controller('sensordata'),
    __metadata("design:paramtypes", [sensordata_service_1.SensorDataService])
], SensorDataController);
exports.SensorDataController = SensorDataController;
//# sourceMappingURL=sensordata.controller.js.map