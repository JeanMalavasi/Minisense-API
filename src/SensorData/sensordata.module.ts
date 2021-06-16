import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MeasurementUnitExistConstranint } from 'src/common/pipes/measurementUnitExistValidator.pipe';
import { DataStreamModule } from 'src/dataStream/datastream.module';
import { MeasurementUnitModule } from 'src/measurementUnit/measurementunit.module';
import { dataStreamExistConstranint } from './pipes/dataStreamExistValidator.pipe';
import { TimestampFormatConstranint } from './pipes/timestampFormtValidator.pipe';
import { TimestampTransform } from './pipes/timestampTransform.pipe';

import { SensorDataController } from './sensordata.controller';
import { SensorData } from './sensordata.model';
import { SensorDataService } from './sensordata.service';

@Module({
    imports: [
        SequelizeModule.forFeature([SensorData]),
        DataStreamModule,
        MeasurementUnitModule
    ],
    controllers: [
        SensorDataController
    ],
    providers: [
        SensorDataService,
        dataStreamExistConstranint,
        MeasurementUnitExistConstranint,
        TimestampFormatConstranint,
        TimestampTransform
    ],
    exports: [
        SensorDataService
    ]
})
export class SensorDataModule { }
