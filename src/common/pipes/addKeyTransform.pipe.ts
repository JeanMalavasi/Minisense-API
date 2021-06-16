import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";
var randomstring = require ('randomstring')

@Injectable()
export class AddKeyTransform implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        value.key = randomstring.generate()
        const newValue = {...value}
        return newValue
    }
    
}