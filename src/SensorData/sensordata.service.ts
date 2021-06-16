import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { SensorData } from './sensordata.model';
import { SensordataValidator } from './sensordataValidator.model';

@Injectable()
export class SensorDataService {

    constructor(
        @InjectModel(SensorData)
        private sensorDataModel: typeof SensorData
    ) { }

    async getAll(): Promise<SensorData[]> {

        return this.sensorDataModel.findAll({
            attributes: ['id', 'timestamp', 'value', 'dataStreamId', 'measurementUnitId']
        })
    }

    async getAllSensorThisDataStreamId(dataStremId: number): Promise<SensorData[]> {
        return this.sensorDataModel.findAll({
            where: {
                dataStreamId: dataStremId
            },
            attributes: ['id', 'timestamp', 'value', 'dataStreamId', 'measurementUnitId']

        });
    }

    async getOneById(id: number): Promise<SensorData> {
        return await this.sensorDataModel.findByPk(id, {
            attributes: ['id', 'timestamp', 'value', 'dataStreamId', 'measurementUnitId']
        })
    }

    async create(sensorData: SensordataValidator) {
        const response = await this.sensorDataModel.create(sensorData, {
            fields: ['timestamp', 'value', 'dataStreamId', 'measurementUnitId'],
        })

        var { timestamp, value } = response
        var json = {
            "timestamp": timestamp,
            "value": value
        }
        return json
    }

    async deleteOneById(id: number): Promise<SensorData> {
        const sensordataUpdate = await this.sensorDataModel.findByPk(id);
        if (sensordataUpdate) {
            sensordataUpdate.destroy();
        }
        return sensordataUpdate
    }
}
