import { DataStreamService } from './datastream.service';
import { DataStreamValidator } from './dataStreamValidator.model';
export declare class DataStreamController {
    private dataStreamService;
    constructor(dataStreamService: DataStreamService);
    getAll(res: any): Promise<void>;
    getOneById(params: any, res: any): Promise<void>;
    create(body: DataStreamValidator, res: any): Promise<void>;
    update(body: DataStreamValidator, res: any): Promise<void>;
    deleteOneById(params: any, res: any): Promise<void>;
}
