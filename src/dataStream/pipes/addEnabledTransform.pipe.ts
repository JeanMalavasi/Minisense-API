import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class AddEnabledTransform implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        if(value.enabled == undefined) {
            value.enabled = true
        }
        const newValue = {...value}
        return newValue
    }
    
}