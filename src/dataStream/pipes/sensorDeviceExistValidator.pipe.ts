import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { SensorDeviceService } from "src/sensorDevice/sensorservice.service";

@Injectable()
@ValidatorConstraint()
export class SensorDeviceExistConstranint implements ValidatorConstraintInterface {
    constructor(private sensorDeviceService: SensorDeviceService) { }

    async validate(sensorId: number, args: ValidationArguments) {
        if (sensorId) {
            return await this.sensorDeviceService.getOneById(sensorId) ? true : false
        }
        return true
    }
    
}

export function IsSensorDeviceExist(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: SensorDeviceExistConstranint,
        });
    };
}