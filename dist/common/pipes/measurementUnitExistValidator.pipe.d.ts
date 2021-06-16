import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from "class-validator";
import { MeasurementUnitService } from "src/measurementUnit/measurementunit.service";
export declare class MeasurementUnitExistConstranint implements ValidatorConstraintInterface {
    private measurementUnitService;
    constructor(measurementUnitService: MeasurementUnitService);
    validate(measurementUnitId: number, args: ValidationArguments): Promise<boolean>;
}
export declare function IsMeasurementUnitExist(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
