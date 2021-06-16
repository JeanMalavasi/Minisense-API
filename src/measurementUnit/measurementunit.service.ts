import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { MeasurementUnit } from './measurementUnit.model';
import { MeasurementUnitValidator } from './measurementUnitValidator.model';

@Injectable()
export class MeasurementUnitService {

    constructor(
        @InjectModel(MeasurementUnit)
        private measurementUnitModel: typeof MeasurementUnit
    ) { }

    async getAll(): Promise<MeasurementUnit[]> {
        return this.measurementUnitModel.findAll({
            attributes: ['id', 'symbol', 'description']
        });
    }

    async getOneById(id: number): Promise<MeasurementUnit> {
        return this.measurementUnitModel.findOne({
            where: {
                id: id
            },
            attributes: ['id', 'symbol', 'description']
        });
    }

    async create(measurementUnit: MeasurementUnitValidator) {
        const response = await this.measurementUnitModel.create(measurementUnit);

        var { symbol, description } = response
        var json = {
            "symbol": symbol,
            "description": description,
        }
        return json
    }

    // async update(measurementUnit: MeasurementUnitValidator): Promise<[number, MeasurementUnitValidator[]]> {
    //     return await this.measurementUnitModel.update(measurementUnit, {
    //         where: {
    //             id: measurementUnit.id
    //         },
    //         fields: ['description']
    //     });
    // }

    // async deleteOneById(id: number): Promise<MeasurementUnit> {

    //     const measurementUnitDeleted = await this.measurementUnitModel.findByPk(id);
    //     if (measurementUnitDeleted) {
    //         measurementUnitDeleted.destroy();
    //     }
    //     return measurementUnitDeleted;
    // }
}
