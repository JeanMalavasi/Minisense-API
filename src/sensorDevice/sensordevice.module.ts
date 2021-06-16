import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from 'src/user/user.module';

import { AddKeyTransform } from '../common/pipes/addKeyTransform.pipe';
import { UserExistConstranint } from './pipes/userExistValidator.pipe';
import { SensorDeviceController } from './sensordevice.controller';
import { SensorDevice } from './sensorDevice.model';
import { SensorDeviceService } from './sensorservice.service';

@Module({
    imports: [
        SequelizeModule.forFeature([SensorDevice]),
        UserModule
    ],
    controllers: [
        SensorDeviceController
    ],
    providers: [
        SensorDeviceService,
        UserExistConstranint,
        AddKeyTransform,
    ],
    exports: [
        SensorDeviceService
    ]
})
export class SensorDeviceModule { }
