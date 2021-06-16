import { MeasurementUnitService } from './measurementunit.service';
import { MeasurementUnitValidator } from './measurementUnitValidator.model';
export declare class MeasurementUnitController {
    private measumentUnitService;
    constructor(measumentUnitService: MeasurementUnitService);
    getAll(res: any): Promise<void>;
    getOneById(params: any, res: any): Promise<void>;
    create(body: MeasurementUnitValidator, res: any): Promise<void>;
}
