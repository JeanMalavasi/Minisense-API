import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { MeasurementUnitService } from "src/measurementUnit/measurementunit.service";

@Injectable()
@ValidatorConstraint()
export class TimestampFormatConstranint implements ValidatorConstraintInterface {
    constructor(private measurementUnitService: MeasurementUnitService) { }

    async validate(timestamp: Date, args: ValidationArguments) {
        if (timestamp == undefined) {
            return true
        }
        return (/\d{4}-\d{2}-\d{2},\d{2}:\d{2}:\d{2}/.test(timestamp.toString())) ? true : false
    }
}

export function IsTimestampFormat(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: TimestampFormatConstranint,
        });
    };
}