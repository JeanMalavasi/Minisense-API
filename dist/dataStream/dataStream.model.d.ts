import { Model } from "sequelize-typescript";
import { MeasurementUnit } from "src/measurementUnit/measurementUnit.model";
import { SensorData } from "src/SensorData/sensordata.model";
import { SensorDevice } from "src/sensorDevice/sensorDevice.model";
export declare class DataStream extends Model<DataStream> {
    key: string;
    label: string;
    enabled: boolean;
    sensorDeviceId: number;
    sensorDevice: SensorDevice;
    measurementUnitId: number;
    measurementUnit: MeasurementUnit;
    sensordata: SensorData;
}
