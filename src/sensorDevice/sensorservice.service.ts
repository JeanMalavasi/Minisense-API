import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import sequelize from 'sequelize';
import { Op } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';

import { DataStream } from 'src/dataStream/dataStream.model';
import { SensorData } from 'src/SensorData/sensordata.model';
import { SensorDevice } from './sensorDevice.model';
import { SensorDeviceValidator } from './sensorDeviceValidator.model';

@Injectable()
export class SensorDeviceService {

    constructor(
        @InjectModel(SensorDevice)
        private sensorDeviceModel: typeof SensorDevice
    ) { }

    async getAll(): Promise<SensorDevice[]> {
        return this.sensorDeviceModel.findAll({
            attributes: ['id', 'key', 'label', 'description', 'userId']
        })
    }

    async getAllSensorThisUser(userId: number): Promise<SensorDevice[]> {
        return this.sensorDeviceModel.findAll({
            where: {
                userID: userId
            },
            include: [
                {
                    model: DataStream,
                    include: [
                        {
                            model: SensorData,
                            attributes: []
                        }
                    ],
                    attributes: [
                        'id', 'key', 'label', 'measurementUnitId', 'sensorDeviceId'
                    ],
                }
            ],
            attributes: [
                'id', 'key', 'label', 'description', 'userId'
            ]
        })
    }
    
    async getOneById(id: number): Promise<SensorDevice> {
        return this.sensorDeviceModel.findOne({
            where: {
                id: id
            },
            include: [
                {
                    model: DataStream,
                    attributes: [
                        'id', 'key', 'measurementUnitId', 'label', 'enabled'
                    ],
                    include: [
                        {
                            model: SensorData,
                            limit: 5,
                            order: [ ['createdAt', 'DESC' ]],
                            attributes: ['timestamp', 'value']
                        }
                    ]
                }
            ],
            attributes: ['id', 'key', 'label', 'description']
        })
    }

    async create(sensorDevice: SensorDeviceValidator) {
        const labelExist = await this.sensorDeviceModel.findOne({
            where: {
                [Op.and]: [{userId: sensorDevice.userId}, {label: sensorDevice.label}]
            }
        })
        if(labelExist) {
            return 
        }

        const response = await this.sensorDeviceModel.create(sensorDevice, {
            fields: ['label', 'key', 'description', 'userId']
        })

        var { label, key, description } = response
        var json = {
            "label": label,
            "key": key,
            "description": description,
        }
        return json
    }

    async update(sensorDevice: SensorDeviceValidator): Promise<[number, SensorDevice[]]> {
        return this.sensorDeviceModel.update(sensorDevice, {
            where: {
                id: sensorDevice.id
            },
            fields: ['label', 'description']
        })
    }

    async delteOneById(id: number): Promise<SensorDevice> {
        const sensorDevice: SensorDevice = await this.sensorDeviceModel.findByPk(id, {
            attributes: ['id', 'label' , 'key', 'description']
        })
        if (sensorDevice) {
            sensorDevice.destroy()
        }
        return sensorDevice
    }

}
