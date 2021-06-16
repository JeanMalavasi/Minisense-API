import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { MeasurementUnit } from 'src/measurementUnit/measurementUnit.model';
import { SensorData } from 'src/SensorData/sensordata.model';
import { DataStream } from './dataStream.model';
import { DataStreamValidator } from './dataStreamValidator.model';

@Injectable()
export class DataStreamService {

    constructor(
        @InjectModel(DataStream)
        private dataStreamModel: typeof DataStream
    ) { }

    async getAll(): Promise<DataStream[]> {
        return this.dataStreamModel.findAll({
            attributes: ['id', 'key', 'label', 'enabled', 'sensorDeviceId', 'measurementUnitId']
        });
    }

    async getOneById(id: number): Promise<DataStream> {
        return await this.dataStreamModel.findByPk(id, {
            include: [
                {
                    model: MeasurementUnit,
                    attributes: ['id', 'symbol']
                },
                {
                    model: SensorData,
                    attributes: ['timestamp', 'value']
                }
            ],
            attributes: ['id', 'key', 'label', 'enabled', 'sensorDeviceId']
        })
    }

    async create(dataStream: DataStreamValidator) {
        const measurementUnitExist = await this.dataStreamModel.findOne({
            where: {
                [Op.and]: [{sensorDeviceId: dataStream.sensorDeviceId}, {measurementUnitId: dataStream.measurementUnitId}]
            }
        })
        if(measurementUnitExist) {
            return 
        }


        const response = await this.dataStreamModel.create(dataStream, {
            fields: ['key', 'label', 'enabled', 'sensorDeviceId', 'measurementUnitId']
        });

        var { key, label, enabled } = response
        var json = {
            "key": key,
            "label": label,
            "enabled": enabled,

        }
        return json
    }

    async update(dataStream: DataStreamValidator): Promise<[number, DataStream[]]> {
        return this.dataStreamModel.update(dataStream, {
            where: {
                id: dataStream.id
            },
            fields: ['label', 'enabled', 'measurementUnitId']
        });
    }

    async deleteOneById(id: number): Promise<DataStream> {
        const dataStreamDeleted = await this.dataStreamModel.findByPk(id, {
            attributes: ['id', 'key', 'label', 'enabled', 'sensorDeviceId', 'measurementUnitId']
        });
        if (dataStreamDeleted) {
            dataStreamDeleted.destroy();
        }
        return dataStreamDeleted;
    }
}

