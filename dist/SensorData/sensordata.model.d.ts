import { Model } from "sequelize-typescript";
import { DataStream } from "src/dataStream/dataStream.model";
import { MeasurementUnit } from "src/measurementUnit/measurementUnit.model";
export declare class SensorData extends Model<SensorData> {
    timestamp: Date;
    value: number;
    dataStreamId: number;
    dataStream: DataStream;
    measurementUnitId: number;
    measurementUnit: MeasurementUnit;
}
