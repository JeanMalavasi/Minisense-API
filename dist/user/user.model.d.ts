import { Model } from "sequelize-typescript";
import { SensorDevice } from "src/sensorDevice/sensorDevice.model";
export declare class User extends Model<User> {
    username: string;
    email: string;
    password: string;
    sensorDviceId: SensorDevice[];
}
