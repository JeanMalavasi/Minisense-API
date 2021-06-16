import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { MeasurementUnitService } from "src/measurementUnit/measurementunit.service";

@Injectable()
@ValidatorConstraint()
export class MeasurementUnitExistConstranint implements ValidatorConstraintInterface {
    constructor(private measurementUnitService: MeasurementUnitService) { }

    async validate(measurementUnitId: number, args: ValidationArguments) {
        if (measurementUnitId) {
            return await this.measurementUnitService.getOneById(measurementUnitId) ? true : false
        }
        return true
    }
}

export function IsMeasurementUnitExist(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: MeasurementUnitExistConstranint,
        });
    };
}