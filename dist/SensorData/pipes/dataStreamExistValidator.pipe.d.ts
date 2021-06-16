import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from "class-validator";
import { DataStreamService } from "src/dataStream/datastream.service";
export declare class dataStreamExistConstranint implements ValidatorConstraintInterface {
    private dataStreamService;
    constructor(dataStreamService: DataStreamService);
    validate(sensorId: number, args: ValidationArguments): Promise<boolean>;
}
export declare function IsDataStreamExist(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
