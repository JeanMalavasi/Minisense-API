import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MeasurementUnitController } from './measurementunit.controller';
import { MeasurementUnit } from './measurementUnit.model';
import { MeasurementUnitService } from './measurementunit.service';
import { IsSymbolUniqueConstranint } from './pipes/symbolUniqueValidator.pipe';

@Module({
    imports: [
        SequelizeModule.forFeature([MeasurementUnit]),
        
    ],
    controllers: [
        MeasurementUnitController
    ],
    providers: [
        IsSymbolUniqueConstranint,
        MeasurementUnitService
    ],
    exports: [
        MeasurementUnitService
    ]
})
export class MeasurementUnitModule { }
