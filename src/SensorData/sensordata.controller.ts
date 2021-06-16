import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Res } from '@nestjs/common';
import { TimestampTransform } from './pipes/timestampTransform.pipe';
import { SensorData } from './sensordata.model';
import { SensorDataService } from './sensordata.service';
import { SensordataValidator } from './sensordataValidator.model';

@Controller('sensordata')
export class SensorDataController {

    constructor(private sensorDataService: SensorDataService) { }

    @Get()
    async getAll(@Res() res) {
        const sensorDataSearched = await this.sensorDataService.getAll();
        if (!sensorDataSearched.length) {
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Não há nenhum dado de sensor cadastrado no banco, não foi possivel busca-los.'
            });
        }
        res.status(HttpStatus.OK)
            .location(`/sensordata`)
            .json(sensorDataSearched);
    }

    @Get('datastream/:streamId')
    async getAllSensorThisDataStreamId(@Param() params, @Res() res) {
        const sensorDataSearched = await this.sensorDataService.getAllSensorThisDataStreamId(params.streamId);
        if (!sensorDataSearched.length) {
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'o Id de Stream informado, não possui nenhum dado de sensor associado, não foi possivel busca-los.'
            });
        }
        res.status(HttpStatus.OK)
            .location(`/sensordata/datastream/${params.streamId}`)
            .json(sensorDataSearched);
    }

    @Get(':id')
    async getOneById(@Param() params, @Res() res) {
        const sensorDataSearched = await this.sensorDataService.getOneById(params.id)
        if (!sensorDataSearched) {
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Id informado não corresponde a nenhum dado de sensor no banco, não foi possivel busca-lo.'
            })
        }
        res.status(HttpStatus.OK)
            .location(`/sensordata/${params.id}`)
            .json(sensorDataSearched);
    }

    @Post()
    async create(@Body(new TimestampTransform()) body: SensordataValidator, @Res() res) {
        const sensorDataCreated = await this.sensorDataService.create(body);
        res.status(HttpStatus.CREATED)
            .location(`/sensordata/${body.dataStreamId}`)
            .json(sensorDataCreated)
    }

    @Delete(':id')
    async deleteOneById(@Param() params, @Res() res) {
        const sensorDataDeleted = await this.sensorDataService.deleteOneById(params.id);
        if (!sensorDataDeleted) {
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'O id informado não corresponde a nenhum dado de sensor, não foi possivel deleta-lo.'
            })
        }
        res.status(HttpStatus.OK)
            .location(`/sensordata/${params.id}`)
            .json(sensorDataDeleted)
    }
}
