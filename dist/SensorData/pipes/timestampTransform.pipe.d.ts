import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
export declare class TimestampTransform implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
