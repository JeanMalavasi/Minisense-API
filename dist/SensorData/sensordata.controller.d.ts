import { SensorDataService } from './sensordata.service';
import { SensordataValidator } from './sensordataValidator.model';
export declare class SensorDataController {
    private sensorDataService;
    constructor(sensorDataService: SensorDataService);
    getAll(res: any): Promise<void>;
    getAllSensorThisDataStreamId(params: any, res: any): Promise<void>;
    getOneById(params: any, res: any): Promise<void>;
    create(body: SensordataValidator, res: any): Promise<void>;
    deleteOneById(params: any, res: any): Promise<void>;
}
