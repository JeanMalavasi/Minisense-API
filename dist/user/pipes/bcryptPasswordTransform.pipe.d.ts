import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
export declare class BcryptPasswordTransform implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): Promise<any>;
}
