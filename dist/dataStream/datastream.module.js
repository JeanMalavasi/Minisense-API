"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataStreamModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const addKeyTransform_pipe_1 = require("../common/pipes/addKeyTransform.pipe");
const measurementunit_module_1 = require("../measurementUnit/measurementunit.module");
const sensordevice_module_1 = require("../sensorDevice/sensordevice.module");
const datastream_controller_1 = require("./datastream.controller");
const dataStream_model_1 = require("./dataStream.model");
const datastream_service_1 = require("./datastream.service");
const addEnabledTransform_pipe_1 = require("./pipes/addEnabledTransform.pipe");
const sensorDeviceExistValidator_pipe_1 = require("./pipes/sensorDeviceExistValidator.pipe");
let DataStreamModule = class DataStreamModule {
};
DataStreamModule = __decorate([
    common_1.Module({
        imports: [
            sequelize_1.SequelizeModule.forFeature([dataStream_model_1.DataStream]),
            sensordevice_module_1.SensorDeviceModule,
            measurementunit_module_1.MeasurementUnitModule,
        ],
        controllers: [
            datastream_controller_1.DataStreamController
        ],
        providers: [
            datastream_service_1.DataStreamService,
            sensorDeviceExistValidator_pipe_1.SensorDeviceExistConstranint,
            addKeyTransform_pipe_1.AddKeyTransform,
            addEnabledTransform_pipe_1.AddEnabledTransform
        ],
        exports: [
            datastream_service_1.DataStreamService
        ]
    })
], DataStreamModule);
exports.DataStreamModule = DataStreamModule;
//# sourceMappingURL=datastream.module.js.map