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
exports.IsTimestampFormat = exports.TimestampFormatConstranint = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const measurementunit_service_1 = require("../../measurementUnit/measurementunit.service");
let TimestampFormatConstranint = class TimestampFormatConstranint {
    constructor(measurementUnitService) {
        this.measurementUnitService = measurementUnitService;
    }
    async validate(timestamp, args) {
        if (timestamp == undefined) {
            return true;
        }
        return (/\d{4}-\d{2}-\d{2},\d{2}:\d{2}:\d{2}/.test(timestamp.toString())) ? true : false;
    }
};
TimestampFormatConstranint = __decorate([
    common_1.Injectable(),
    class_validator_1.ValidatorConstraint(),
    __metadata("design:paramtypes", [measurementunit_service_1.MeasurementUnitService])
], TimestampFormatConstranint);
exports.TimestampFormatConstranint = TimestampFormatConstranint;
function IsTimestampFormat(validationOptions) {
    return function (object, propertyName) {
        class_validator_1.registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: TimestampFormatConstranint,
        });
    };
}
exports.IsTimestampFormat = IsTimestampFormat;
//# sourceMappingURL=timestampFormtValidator.pipe.js.map