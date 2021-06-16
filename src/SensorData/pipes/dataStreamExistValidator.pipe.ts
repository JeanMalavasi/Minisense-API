import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { DataStreamService } from "src/dataStream/datastream.service";
import { SensorDeviceService } from "src/sensorDevice/sensorservice.service";

@Injectable()
@ValidatorConstraint()
export class dataStreamExistConstranint implements ValidatorConstraintInterface {
    constructor(private dataStreamService: DataStreamService) { }

    async validate(sensorId: number, args: ValidationArguments) {
        if (sensorId) {
            return await this.dataStreamService.getOneById(sensorId) ? true : false
        }
        return true
    }
    
}

export function IsDataStreamExist(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: dataStreamExistConstranint,
        });
    };
}