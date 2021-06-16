import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
export declare class AddKeyTransform implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
