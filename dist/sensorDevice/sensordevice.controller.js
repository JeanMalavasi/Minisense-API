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
exports.SensorDeviceController = void 0;
const common_1 = require("@nestjs/common");
const addKeyTransform_pipe_1 = require("../common/pipes/addKeyTransform.pipe");
const sensorDeviceValidator_model_1 = require("./sensorDeviceValidator.model");
const sensorservice_service_1 = require("./sensorservice.service");
let SensorDeviceController = class SensorDeviceController {
    constructor(sensorDeviceService) {
        this.sensorDeviceService = sensorDeviceService;
    }
    async getAll(res) {
        const sensorSearched = await this.sensorDeviceService.getAll();
        if (!sensorSearched.length) {
            throw new common_1.NotFoundException({
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'Não há nenhum sensor cadastrado no banco, não foi possivel busca-los.'
            });
        }
        res.status(common_1.HttpStatus.OK)
            .location(`sensordevice/`)
            .json(sensorSearched);
    }
    async getAllSensorThisUser(params, res) {
        const sensorSearched = await this.sensorDeviceService.getAllSensorThisUser(params.id);
        if (!sensorSearched.length) {
            throw new common_1.NotFoundException({
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'Id de usuario informado, não possui nenhum sensor associado, não foi possivel busca-los.'
            });
        }
        res.status(common_1.HttpStatus.OK)
            .location(`sensordevice/deviceuser/`)
            .json(sensorSearched);
    }
    async getOneById(params, res) {
        const sensorSearched = await this.sensorDeviceService.getOneById(params.id);
        if (!sensorSearched) {
            throw new common_1.NotFoundException({
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'Id informado não corresponde a um sensor, não foi possivel busca-lo.'
            });
        }
        res.status(common_1.HttpStatus.OK)
            .location(`sensordevice/${params.id}`)
            .json(sensorSearched);
    }
    async create(body, res) {
        const sensorCreated = await this.sensorDeviceService.create(body);
        if (!sensorCreated) {
            throw new common_1.NotFoundException({
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                message: 'Usuario informado já possui um sensor com apelido identico, troque algum dos dois campos, não foi possivel cadrasta-lo.'
            });
        }
        res.status(common_1.HttpStatus.CREATED)
            .location(`sensordevice/${body.id}`)
            .json(sensorCreated);
    }
    async update(body, res) {
        const sensorUpdated = await this.sensorDeviceService.update(body);
        if (!!!sensorUpdated[0]) {
            throw new common_1.NotFoundException({
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'Id informado não corresponde a nenhum sensor, não foi possivel atualiza-lo.'
            });
        }
        res.status(common_1.HttpStatus.OK)
            .location(`sensordevice/${body.id}`)
            .json(sensorUpdated);
    }
    async delteOneByLabel(params, res) {
        const sensorDeleted = await this.sensorDeviceService.delteOneById(params.id);
        if (!sensorDeleted) {
            throw new common_1.NotFoundException({
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'Id informado não corresponde a um sensor, não foi possivel deleta-lo.'
            });
        }
        res.status(common_1.HttpStatus.OK)
            .location(`sensordevice/${params.id}`)
            .json(sensorDeleted);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SensorDeviceController.prototype, "getAll", null);
__decorate([
    common_1.Get('deviceuser/:id'),
    __param(0, common_1.Param()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SensorDeviceController.prototype, "getAllSensorThisUser", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SensorDeviceController.prototype, "getOneById", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body(new addKeyTransform_pipe_1.AddKeyTransform())), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sensorDeviceValidator_model_1.SensorDeviceValidator, Object]),
    __metadata("design:returntype", Promise)
], SensorDeviceController.prototype, "create", null);
__decorate([
    common_1.Put(),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sensorDeviceValidator_model_1.SensorDeviceValidator, Object]),
    __metadata("design:returntype", Promise)
], SensorDeviceController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SensorDeviceController.prototype, "delteOneByLabel", null);
SensorDeviceController = __decorate([
    common_1.Controller('sensordevice'),
    __metadata("design:paramtypes", [sensorservice_service_1.SensorDeviceService])
], SensorDeviceController);
exports.SensorDeviceController = SensorDeviceController;
//# sourceMappingURL=sensordevice.controller.js.map