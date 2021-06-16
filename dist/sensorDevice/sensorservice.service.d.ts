import { SensorDevice } from './sensorDevice.model';
import { SensorDeviceValidator } from './sensorDeviceValidator.model';
export declare class SensorDeviceService {
    private sensorDeviceModel;
    constructor(sensorDeviceModel: typeof SensorDevice);
    getAll(): Promise<SensorDevice[]>;
    getAllSensorThisUser(userId: number): Promise<SensorDevice[]>;
    getOneById(id: number): Promise<SensorDevice>;
    create(sensorDevice: SensorDeviceValidator): Promise<{
        label: string;
        key: string;
        description: string;
    }>;
    update(sensorDevice: SensorDeviceValidator): Promise<[number, SensorDevice[]]>;
    delteOneById(id: number): Promise<SensorDevice>;
}
