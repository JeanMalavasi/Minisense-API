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
exports.DataStreamController = void 0;
const common_1 = require("@nestjs/common");
const addKeyTransform_pipe_1 = require("../common/pipes/addKeyTransform.pipe");
const datastream_service_1 = require("./datastream.service");
const dataStreamValidator_model_1 = require("./dataStreamValidator.model");
const addEnabledTransform_pipe_1 = require("./pipes/addEnabledTransform.pipe");
let DataStreamController = class DataStreamController {
    constructor(dataStreamService) {
        this.dataStreamService = dataStreamService;
    }
    async getAll(res) {
        const dataStreamSearched = await this.dataStreamService.getAll();
        if (!dataStreamSearched.length) {
            throw new common_1.NotFoundException(({
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'Não há nenhum stream cadastrado no banco, não foi possivel busca-los.'
            }));
        }
        res.status(common_1.HttpStatus.OK)
            .location(`/datastream`)
            .json(dataStreamSearched);
    }
    async getOneById(params, res) {
        const dataStreamSearched = await this.dataStreamService.getOneById(params.id);
        if (!dataStreamSearched) {
            throw new common_1.NotFoundException({
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'Id informado não corresponde a nenhum stream no banco, não foi possivel busca-lo.'
            });
        }
        res.status(common_1.HttpStatus.OK)
            .location(`/user/${params.id}`)
            .json(dataStreamSearched);
    }
    async create(body, res) {
        const dataStreamCreated = await this.dataStreamService.create(body);
        if (!dataStreamCreated) {
            throw new common_1.NotFoundException({
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                message: 'Sensor informado já possui um stream com está unidade de medida, troque algum dos dois campos, não foi possivel cadrasta-lo.'
            });
        }
        res.status(common_1.HttpStatus.CREATED)
            .location(`/datastream/${body.id}`)
            .json(dataStreamCreated);
    }
    async update(body, res) {
        const dataStreamUpdated = await this.dataStreamService.update(body);
        if (!!!dataStreamUpdated[0]) {
            throw new common_1.NotFoundException({
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'Id informado não corresponde a nenhum stream, não foi possivel atualiza-lo.'
            });
        }
        res.status(common_1.HttpStatus.OK)
            .location(`/datastream/${body.id}`)
            .json(dataStreamUpdated);
    }
    async deleteOneById(params, res) {
        const dataStreamDeleted = await this.dataStreamService.deleteOneById(params.id);
        if (!dataStreamDeleted) {
            throw new common_1.NotFoundException({
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'Id informado não corresponde a nenhum stream, não foi possivel deleta-lo.'
            });
        }
        res.status(common_1.HttpStatus.OK)
            .location(`/user/${params.id}`)
            .json(dataStreamDeleted);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DataStreamController.prototype, "getAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DataStreamController.prototype, "getOneById", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body(new addKeyTransform_pipe_1.AddKeyTransform(), new addEnabledTransform_pipe_1.AddEnabledTransform())), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dataStreamValidator_model_1.DataStreamValidator, Object]),
    __metadata("design:returntype", Promise)
], DataStreamController.prototype, "create", null);
__decorate([
    common_1.Put(),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dataStreamValidator_model_1.DataStreamValidator, Object]),
    __metadata("design:returntype", Promise)
], DataStreamController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DataStreamController.prototype, "deleteOneById", null);
DataStreamController = __decorate([
    common_1.Controller('datastream'),
    __metadata("design:paramtypes", [datastream_service_1.DataStreamService])
], DataStreamController);
exports.DataStreamController = DataStreamController;
//# sourceMappingURL=datastream.controller.js.map