import { SensorData } from './sensordata.model';
import { SensordataValidator } from './sensordataValidator.model';
export declare class SensorDataService {
    private sensorDataModel;
    constructor(sensorDataModel: typeof SensorData);
    getAll(): Promise<SensorData[]>;
    getAllSensorThisDataStreamId(dataStremId: number): Promise<SensorData[]>;
    getOneById(id: number): Promise<SensorData>;
    create(sensorData: SensordataValidator): Promise<{
        timestamp: Date;
        value: number;
    }>;
    deleteOneById(id: number): Promise<SensorData>;
}
