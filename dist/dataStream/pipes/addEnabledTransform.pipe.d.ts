import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
export declare class AddEnabledTransform implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
