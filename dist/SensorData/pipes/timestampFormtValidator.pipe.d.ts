import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from "class-validator";
import { MeasurementUnitService } from "src/measurementUnit/measurementunit.service";
export declare class TimestampFormatConstranint implements ValidatorConstraintInterface {
    private measurementUnitService;
    constructor(measurementUnitService: MeasurementUnitService);
    validate(timestamp: Date, args: ValidationArguments): Promise<boolean>;
}
export declare function IsTimestampFormat(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
