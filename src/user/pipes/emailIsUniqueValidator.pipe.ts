import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { User } from "../user.model";


@Injectable()
@ValidatorConstraint()
export class IsEmailUniqueConstranint implements ValidatorConstraintInterface {
    constructor(
        @InjectModel(User)
        private userModel: typeof User
    ) { }

    async validate(email: string, args: ValidationArguments) {
        if (email) {
            return await this.userModel.findOne({
                where: {
                    email: email
                }
            }) ? false : true
        }
        return true
    }
}

export function IsEmailUnique(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsEmailUniqueConstranint,
        });
    };
}