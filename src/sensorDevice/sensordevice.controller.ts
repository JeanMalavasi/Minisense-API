import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Res } from '@nestjs/common';
import { AddKeyTransform } from '../common/pipes/addKeyTransform.pipe';
import { SensorDevice } from './sensorDevice.model';
import { SensorDeviceValidator } from './sensorDeviceValidator.model';
import { SensorDeviceService } from './sensorservice.service';

@Controller('sensordevice')
export class SensorDeviceController {

    constructor(private sensorDeviceService: SensorDeviceService) { }

    @Get()
    async getAll(@Res() res) {
        const sensorSearched = await this.sensorDeviceService.getAll()
        if (!sensorSearched.length) {
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Não há nenhum sensor cadastrado no banco, não foi possivel busca-los.'
            })
        }
        res.status(HttpStatus.OK)
            .location(`sensordevice/`)
            .json(sensorSearched);
    }

    @Get('deviceuser/:id')
    async getAllSensorThisUser(@Param() params, @Res() res) {
        const sensorSearched = await this.sensorDeviceService.getAllSensorThisUser(params.id)
        if (!sensorSearched.length) {
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Id de usuario informado, não possui nenhum sensor associado, não foi possivel busca-los.'
            })
        }
        res.status(HttpStatus.OK)
            .location(`sensordevice/deviceuser/`)
            .json(sensorSearched);
    }

    @Get(':id')
    async getOneById(@Param() params, @Res() res) {
        const sensorSearched = await this.sensorDeviceService.getOneById(params.id)
        if (!sensorSearched) {
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Id informado não corresponde a um sensor, não foi possivel busca-lo.'
            })
        }
        res.status(HttpStatus.OK)
            .location(`sensordevice/${params.id}`)
            .json(sensorSearched);
    }

    @Post()
    async create(@Body(new AddKeyTransform()) body: SensorDeviceValidator, @Res() res) {
        const sensorCreated = await this.sensorDeviceService.create(body);
        if (!sensorCreated) {
            throw new NotFoundException({
                statusCode: HttpStatus.BAD_REQUEST,
                message: 'Usuario informado já possui um sensor com apelido identico, troque algum dos dois campos, não foi possivel cadrasta-lo.'
            })
        }
        res.status(HttpStatus.CREATED)
            .location(`sensordevice/${body.id}`)
            .json(sensorCreated);
    }


    @Put()
    async update(@Body() body: SensorDeviceValidator, @Res() res) {
        const sensorUpdated = await this.sensorDeviceService.update(body);
        if (!!!sensorUpdated[0]) {
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Id informado não corresponde a nenhum sensor, não foi possivel atualiza-lo.'
            })
        }
        res.status(HttpStatus.OK)
            .location(`sensordevice/${body.id}`)
            .json(sensorUpdated);
    }


    @Delete(':id')
    async delteOneByLabel(@Param() params, @Res() res) {
        const sensorDeleted = await this.sensorDeviceService.delteOneById(params.id)
        if (!sensorDeleted) {
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Id informado não corresponde a um sensor, não foi possivel deleta-lo.'
            })
        }
        res.status(HttpStatus.OK)
            .location(`sensordevice/${params.id}`)
            .json(sensorDeleted);
    }


}
