import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from "class-validator";
import { User } from "../user.model";
export declare class IsEmailUniqueConstranint implements ValidatorConstraintInterface {
    private userModel;
    constructor(userModel: typeof User);
    validate(email: string, args: ValidationArguments): Promise<boolean>;
}
export declare function IsEmailUnique(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
