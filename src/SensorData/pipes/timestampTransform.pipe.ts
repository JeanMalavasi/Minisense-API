import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";
var randomstring = require ('randomstring')

@Injectable()
export class TimestampTransform implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        if(value.timestamp == undefined) {
            value.timestamp = new Date()
        } else {
            value.timestamp = new Date(value.timestamp)
        }
        const newValue = {...value}
        return newValue
    }
    
}