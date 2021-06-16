import { AppController } from './app.controller';
import { SensorDataModule } from './SensorData/sensordata.module';
import { MeasurementUnitModule } from './measurementUnit/measurementunit.module';
import { DataStreamModule } from './dataStream/datastream.module';
import { SensorDeviceModule } from './sensorDevice/sensordevice.module';
import { UserModule } from './user/user.module';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { FilterExceptionHttp } from './common/filter/filterExceptionHttp.filter';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/guard/jwtAuth.guard';


@Module({
  imports: [
    AuthModule,
    SensorDataModule,
    MeasurementUnitModule,
    DataStreamModule,
    SensorDeviceModule,
    UserModule,
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.HOST,
      port: parseInt(process.env.PORTA),
      username: process.env.USUARIO_BANCO_DADOS,
      password: process.env.SENHA_BANCO_DADOS,
      database: process.env.DATABASE,
      autoLoadModels: true,
      synchronize: true,
    }),

  ],
  controllers: [
        AppController, 
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: FilterExceptionHttp
    },
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ]
})
export class AppModule { }
