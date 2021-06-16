"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeasurementUnitModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const measurementunit_controller_1 = require("./measurementunit.controller");
const measurementUnit_model_1 = require("./measurementUnit.model");
const measurementunit_service_1 = require("./measurementunit.service");
const symbolUniqueValidator_pipe_1 = require("./pipes/symbolUniqueValidator.pipe");
let MeasurementUnitModule = class MeasurementUnitModule {
};
MeasurementUnitModule = __decorate([
    common_1.Module({
        imports: [
            sequelize_1.SequelizeModule.forFeature([measurementUnit_model_1.MeasurementUnit]),
        ],
        controllers: [
            measurementunit_controller_1.MeasurementUnitController
        ],
        providers: [
            symbolUniqueValidator_pipe_1.IsSymbolUniqueConstranint,
            measurementunit_service_1.MeasurementUnitService
        ],
        exports: [
            measurementunit_service_1.MeasurementUnitService
        ]
    })
], MeasurementUnitModule);
exports.MeasurementUnitModule = MeasurementUnitModule;
//# sourceMappingURL=measurementunit.module.js.map