import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AddKeyTransform } from 'src/common/pipes/addKeyTransform.pipe';
import { MeasurementUnitModule } from 'src/measurementUnit/measurementunit.module';
import { SensorDeviceModule } from 'src/sensorDevice/sensordevice.module';
import { DataStreamController } from './datastream.controller';
import { DataStream } from './dataStream.model';
import { DataStreamService } from './datastream.service';
import { AddEnabledTransform } from './pipes/addEnabledTransform.pipe';
import { SensorDeviceExistConstranint } from './pipes/sensorDeviceExistValidator.pipe';

@Module({
    imports: [
        SequelizeModule.forFeature([DataStream]),
        SensorDeviceModule,
        MeasurementUnitModule,
    ],
    controllers: [
        DataStreamController
    ],
    providers: [ 
        DataStreamService,
        SensorDeviceExistConstranint,
        AddKeyTransform,
        AddEnabledTransform
    ],
    exports: [
        DataStreamService
    ]
})
export class DataStreamModule {}
