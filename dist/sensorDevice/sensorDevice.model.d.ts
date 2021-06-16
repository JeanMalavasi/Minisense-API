import { Model } from "sequelize-typescript";
import { DataStream } from "src/dataStream/dataStream.model";
import { User } from "src/user/user.model";
export declare class SensorDevice extends Model<SensorDevice> {
    key: string;
    label: string;
    description: string;
    userId: number;
    user: User;
    dataStreamId: DataStream;
}
