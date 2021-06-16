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
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsDataStreamExist = exports.dataStreamExistConstranint = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const datastream_service_1 = require("../../dataStream/datastream.service");
const sensorservice_service_1 = require("../../sensorDevice/sensorservice.service");
let dataStreamExistConstranint = class dataStreamExistConstranint {
    constructor(dataStreamService) {
        this.dataStreamService = dataStreamService;
    }
    async validate(sensorId, args) {
        if (sensorId) {
            return await this.dataStreamService.getOneById(sensorId) ? true : false;
        }
        return true;
    }
};
dataStreamExistConstranint = __decorate([
    common_1.Injectable(),
    class_validator_1.ValidatorConstraint(),
    __metadata("design:paramtypes", [datastream_service_1.DataStreamService])
], dataStreamExistConstranint);
exports.dataStreamExistConstranint = dataStreamExistConstranint;
function IsDataStreamExist(validationOptions) {
    return function (object, propertyName) {
        class_validator_1.registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: dataStreamExistConstranint,
        });
    };
}
exports.IsDataStreamExist = IsDataStreamExist;
//# sourceMappingURL=dataStreamExistValidator.pipe.js.map