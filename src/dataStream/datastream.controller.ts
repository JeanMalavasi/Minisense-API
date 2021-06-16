import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Res } from '@nestjs/common';
import { AddKeyTransform } from '../common/pipes/addKeyTransform.pipe';
import { DataStreamService } from './datastream.service';
import { DataStreamValidator } from './dataStreamValidator.model';
import { AddEnabledTransform } from './pipes/addEnabledTransform.pipe';

@Controller('datastream')
export class DataStreamController {

    constructor(private dataStreamService: DataStreamService) { }

    @Get()
    async getAll(@Res() res) {
        const dataStreamSearched = await this.dataStreamService.getAll();
        if (!dataStreamSearched.length) {
            throw new NotFoundException(({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Não há nenhum stream cadastrado no banco, não foi possivel busca-los.'
            }))
        }
        res.status(HttpStatus.OK)
            .location(`/datastream`)
            .json(dataStreamSearched);
    }

    @Get(':id')
    async getOneById(@Param() params, @Res() res){
        const dataStreamSearched = await this.dataStreamService.getOneById(params.id)
        if(!dataStreamSearched) {
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Id informado não corresponde a nenhum stream no banco, não foi possivel busca-lo.'
            })
        }
        res.status(HttpStatus.OK)
            .location(`/user/${params.id}`)
            .json(dataStreamSearched);
    }

    @Post()
    async create(@Body(new AddKeyTransform(), new AddEnabledTransform()) body: DataStreamValidator, @Res() res) {
        const dataStreamCreated = await this.dataStreamService.create(body);
        if (!dataStreamCreated) {
            throw new NotFoundException({
                statusCode: HttpStatus.BAD_REQUEST,
                message: 'Sensor informado já possui um stream com está unidade de medida, troque algum dos dois campos, não foi possivel cadrasta-lo.'
            })
        }
        res.status(HttpStatus.CREATED)
            .location(`/datastream/${body.id}`)
            .json(dataStreamCreated)
    }

    @Put()
    async update(@Body() body: DataStreamValidator, @Res() res) {
        const dataStreamUpdated = await this.dataStreamService.update(body);
        if (!!!dataStreamUpdated[0]) {
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Id informado não corresponde a nenhum stream, não foi possivel atualiza-lo.'
            })
        }
        res.status(HttpStatus.OK)
            .location(`/datastream/${body.id}`)
            .json(dataStreamUpdated)
    }

    @Delete(':id')
    async deleteOneById(@Param() params, @Res() res) {
        const dataStreamDeleted = await this.dataStreamService.deleteOneById(params.id)
        if(!dataStreamDeleted){
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Id informado não corresponde a nenhum stream, não foi possivel deleta-lo.'
            })
        }
        res.status(HttpStatus.OK)
            .location(`/user/${params.id}`)
            .json(dataStreamDeleted);
    }
}