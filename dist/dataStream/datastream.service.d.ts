import { DataStream } from './dataStream.model';
import { DataStreamValidator } from './dataStreamValidator.model';
export declare class DataStreamService {
    private dataStreamModel;
    constructor(dataStreamModel: typeof DataStream);
    getAll(): Promise<DataStream[]>;
    getOneById(id: number): Promise<DataStream>;
    create(dataStream: DataStreamValidator): Promise<{
        key: string;
        label: string;
        enabled: boolean;
    }>;
    update(dataStream: DataStreamValidator): Promise<[number, DataStream[]]>;
    deleteOneById(id: number): Promise<DataStream>;
}
