import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from "class-validator";
import { MeasurementUnit } from "../measurementUnit.model";
export declare class IsSymbolUniqueConstranint implements ValidatorConstraintInterface {
    private measurementUnitModel;
    constructor(measurementUnitModel: typeof MeasurementUnit);
    validate(symbol: string, args: ValidationArguments): Promise<boolean>;
}
export declare function IsSymbolUnique(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
