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
exports.MeasurementUnitController = void 0;
const common_1 = require("@nestjs/common");
const measurementunit_service_1 = require("./measurementunit.service");
const measurementUnitValidator_model_1 = require("./measurementUnitValidator.model");
let MeasurementUnitController = class MeasurementUnitController {
    constructor(measumentUnitService) {
        this.measumentUnitService = measumentUnitService;
    }
    async getAll(res) {
        const measurementUnitSearched = await this.measumentUnitService.getAll();
        if (!measurementUnitSearched.length) {
            throw new common_1.NotFoundException({
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'Não há nenhuma unidade de medida cadastrada no banco, não foi possivel busca-las.'
            });
        }
        res.status(common_1.HttpStatus.OK)
            .location(`/user/`)
            .json(measurementUnitSearched);
    }
    async getOneById(params, res) {
        const measurementUnitSearched = await this.measumentUnitService.getOneById(params.id);
        if (!measurementUnitSearched) {
            throw new common_1.NotFoundException({
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'Id informado não corresponde a nenhuma unidade de medida no banco, não foi posivel busca-la.'
            });
        }
        res.status(common_1.HttpStatus.OK)
            .location(`/user/${params.id}`)
            .json(measurementUnitSearched);
    }
    async create(body, res) {
        const measurementUnitCreated = await this.measumentUnitService.create(body);
        res.status(common_1.HttpStatus.CREATED)
            .location(`/measurementunit/${body.id}`)
            .json(measurementUnitCreated);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MeasurementUnitController.prototype, "getAll", null);
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Param()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MeasurementUnitController.prototype, "getOneById", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [measurementUnitValidator_model_1.MeasurementUnitValidator, Object]),
    __metadata("design:returntype", Promise)
], MeasurementUnitController.prototype, "create", null);
MeasurementUnitController = __decorate([
    common_1.Controller('measurementunit'),
    __metadata("design:paramtypes", [measurementunit_service_1.MeasurementUnitService])
], MeasurementUnitController);
exports.MeasurementUnitController = MeasurementUnitController;
//# sourceMappingURL=measurementunit.controller.js.map