import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from "class-validator";
import { UserService } from "src/user/user.service";
export declare class UserExistConstranint implements ValidatorConstraintInterface {
    private userService;
    constructor(userService: UserService);
    validate(userId: number, args: ValidationArguments): Promise<boolean>;
}
export declare function IsUserExist(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
