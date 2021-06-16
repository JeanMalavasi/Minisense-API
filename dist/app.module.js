"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const app_controller_1 = require("./app.controller");
const sensordata_module_1 = require("./SensorData/sensordata.module");
const measurementunit_module_1 = require("./measurementUnit/measurementunit.module");
const datastream_module_1 = require("./dataStream/datastream.module");
const sensordevice_module_1 = require("./sensorDevice/sensordevice.module");
const user_module_1 = require("./user/user.module");
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const filterExceptionHttp_filter_1 = require("./common/filter/filterExceptionHttp.filter");
const auth_module_1 = require("./auth/auth.module");
const jwtAuth_guard_1 = require("./auth/guard/jwtAuth.guard");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            auth_module_1.AuthModule,
            sensordata_module_1.SensorDataModule,
            measurementunit_module_1.MeasurementUnitModule,
            datastream_module_1.DataStreamModule,
            sensordevice_module_1.SensorDeviceModule,
            user_module_1.UserModule,
            config_1.ConfigModule.forRoot(),
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'mysql',
                host: process.env.HOST,
                port: parseInt(process.env.PORTA),
                username: process.env.USUARIO_BANCO_DADOS,
                password: process.env.SENHA_BANCO_DADOS,
                database: process.env.DATABASE,
                autoLoadModels: true,
                synchronize: true,
            }),
        ],
        controllers: [
            app_controller_1.AppController,
        ],
        providers: [
            {
                provide: core_1.APP_FILTER,
                useClass: filterExceptionHttp_filter_1.FilterExceptionHttp
            },
            {
                provide: core_1.APP_GUARD,
                useClass: jwtAuth_guard_1.JwtAuthGuard,
            },
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map