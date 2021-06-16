import { SensorDeviceValidator } from './sensorDeviceValidator.model';
import { SensorDeviceService } from './sensorservice.service';
export declare class SensorDeviceController {
    private sensorDeviceService;
    constructor(sensorDeviceService: SensorDeviceService);
    getAll(res: any): Promise<void>;
    getAllSensorThisUser(params: any, res: any): Promise<void>;
    getOneById(params: any, res: any): Promise<void>;
    create(body: SensorDeviceValidator, res: any): Promise<void>;
    update(body: SensorDeviceValidator, res: any): Promise<void>;
    delteOneByLabel(params: any, res: any): Promise<void>;
}
