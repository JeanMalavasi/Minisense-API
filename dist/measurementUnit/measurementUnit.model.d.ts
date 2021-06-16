import { Model } from "sequelize-typescript";
import { DataStream } from "src/dataStream/dataStream.model";
import { SensorData } from "src/SensorData/sensordata.model";
export declare class MeasurementUnit extends Model<MeasurementUnit> {
    symbol: string;
    description: string;
    sensorData: SensorData;
    dataStream: DataStream;
}
