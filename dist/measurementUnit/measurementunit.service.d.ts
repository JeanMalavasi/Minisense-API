import { MeasurementUnit } from './measurementUnit.model';
import { MeasurementUnitValidator } from './measurementUnitValidator.model';
export declare class MeasurementUnitService {
    private measurementUnitModel;
    constructor(measurementUnitModel: typeof MeasurementUnit);
    getAll(): Promise<MeasurementUnit[]>;
    getOneById(id: number): Promise<MeasurementUnit>;
    create(measurementUnit: MeasurementUnitValidator): Promise<{
        symbol: string;
        description: string;
    }>;
}
