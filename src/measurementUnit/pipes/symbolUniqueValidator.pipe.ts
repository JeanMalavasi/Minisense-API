import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { MeasurementUnit } from "../measurementUnit.model";



@Injectable()
@ValidatorConstraint()
export class IsSymbolUniqueConstranint implements ValidatorConstraintInterface {
    constructor(
        @InjectModel(MeasurementUnit)
        private measurementUnitModel: typeof MeasurementUnit
    ) { }

    async validate(symbol: string, args: ValidationArguments) {
        if(symbol){
            return await this.measurementUnitModel.findOne({
                where: {
                    symbol: symbol
                }
            }) ? false : true
        }
        return true
    }
}

export function IsSymbolUnique(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsSymbolUniqueConstranint,
        });
    };
}