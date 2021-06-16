"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensorDataModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const measurementUnitExistValidator_pipe_1 = require("../common/pipes/measurementUnitExistValidator.pipe");
const datastream_module_1 = require("../dataStream/datastream.module");
const measurementunit_module_1 = require("../measurementUnit/measurementunit.module");
const dataStreamExistValidator_pipe_1 = require("./pipes/dataStreamExistValidator.pipe");
const timestampFormtValidator_pipe_1 = require("./pipes/timestampFormtValidator.pipe");
const timestampTransform_pipe_1 = require("./pipes/timestampTransform.pipe");
const sensordata_controller_1 = require("./sensordata.controller");
const sensordata_model_1 = require("./sensordata.model");
const sensordata_service_1 = require("./sensordata.service");
let SensorDataModule = class SensorDataModule {
};
SensorDataModule = __decorate([
    common_1.Module({
        imports: [
            sequelize_1.SequelizeModule.forFeature([sensordata_model_1.SensorData]),
            datastream_module_1.DataStreamModule,
            measurementunit_module_1.MeasurementUnitModule
        ],
        controllers: [
            sensordata_controller_1.SensorDataController
        ],
        providers: [
            sensordata_service_1.SensorDataService,
            dataStreamExistValidator_pipe_1.dataStreamExistConstranint,
            measurementUnitExistValidator_pipe_1.MeasurementUnitExistConstranint,
            timestampFormtValidator_pipe_1.TimestampFormatConstranint,
            timestampTransform_pipe_1.TimestampTransform
        ],
        exports: [
            sensordata_service_1.SensorDataService
        ]
    })
], SensorDataModule);
exports.SensorDataModule = SensorDataModule;
//# sourceMappingURL=sensordata.module.js.map