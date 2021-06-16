import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";
const bcrypt = require('bcrypt');

@Injectable()
export class BcryptPasswordTransform implements PipeTransform {
    async transform(value: any, metadata: ArgumentMetadata) {
        value.password = await bcrypt.hash(value.password, 10)
        const newValue = {...value}
        return newValue
    }
    
}