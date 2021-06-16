"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensorDeviceModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const user_module_1 = require("../user/user.module");
const addKeyTransform_pipe_1 = require("../common/pipes/addKeyTransform.pipe");
const userExistValidator_pipe_1 = require("./pipes/userExistValidator.pipe");
const sensordevice_controller_1 = require("./sensordevice.controller");
const sensorDevice_model_1 = require("./sensorDevice.model");
const sensorservice_service_1 = require("./sensorservice.service");
let SensorDeviceModule = class SensorDeviceModule {
};
SensorDeviceModule = __decorate([
    common_1.Module({
        imports: [
            sequelize_1.SequelizeModule.forFeature([sensorDevice_model_1.SensorDevice]),
            user_module_1.UserModule
        ],
        controllers: [
            sensordevice_controller_1.SensorDeviceController
        ],
        providers: [
            sensorservice_service_1.SensorDeviceService,
            userExistValidator_pipe_1.UserExistConstranint,
            addKeyTransform_pipe_1.AddKeyTransform,
        ],
        exports: [
            sensorservice_service_1.SensorDeviceService
        ]
    })
], SensorDeviceModule);
exports.SensorDeviceModule = SensorDeviceModule;
//# sourceMappingURL=sensordevice.module.js.map