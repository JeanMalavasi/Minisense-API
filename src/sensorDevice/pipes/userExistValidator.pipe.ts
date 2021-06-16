import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UserService } from "src/user/user.service";

@Injectable()
@ValidatorConstraint()
export class UserExistConstranint implements ValidatorConstraintInterface {
    constructor(private userService: UserService) { }

    async validate(userId: number, args: ValidationArguments) {
        if (userId) {
            return await this.userService.getOneById(userId) ? true : false
        }
        return true
    }
}

export function IsUserExist(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: UserExistConstranint,
        });
    };
}