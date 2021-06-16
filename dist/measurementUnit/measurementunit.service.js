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
exports.MeasurementUnitService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const measurementUnit_model_1 = require("./measurementUnit.model");
let MeasurementUnitService = class MeasurementUnitService {
    constructor(measurementUnitModel) {
        this.measurementUnitModel = measurementUnitModel;
    }
    async getAll() {
        return this.measurementUnitModel.findAll({
            attributes: ['id', 'symbol', 'description']
        });
    }
    async getOneById(id) {
        return this.measurementUnitModel.findOne({
            where: {
                id: id
            },
            attributes: ['id', 'symbol', 'description']
        });
    }
    async create(measurementUnit) {
        const response = await this.measurementUnitModel.create(measurementUnit);
        var { symbol, description } = response;
        var json = {
            "symbol": symbol,
            "description": description,
        };
        return json;
    }
};
MeasurementUnitService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(measurementUnit_model_1.MeasurementUnit)),
    __metadata("design:paramtypes", [Object])
], MeasurementUnitService);
exports.MeasurementUnitService = MeasurementUnitService;
//# sourceMappingURL=measurementunit.service.js.map