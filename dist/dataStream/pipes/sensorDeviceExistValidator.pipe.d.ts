import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from "class-validator";
import { SensorDeviceService } from "src/sensorDevice/sensorservice.service";
export declare class SensorDeviceExistConstranint implements ValidatorConstraintInterface {
    private sensorDeviceService;
    constructor(sensorDeviceService: SensorDeviceService);
    validate(sensorId: number, args: ValidationArguments): Promise<boolean>;
}
export declare function IsSensorDeviceExist(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
