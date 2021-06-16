import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Res } from '@nestjs/common';
import { MeasurementUnit } from './measurementUnit.model';
import { MeasurementUnitService } from './measurementunit.service';
import { MeasurementUnitValidator } from './measurementUnitValidator.model';

@Controller('measurementunit')
export class MeasurementUnitController {

    constructor(private measumentUnitService: MeasurementUnitService) { }

    @Get()
    async getAll(@Res() res) {
        const measurementUnitSearched = await this.measumentUnitService.getAll();
        if (!measurementUnitSearched.length) {
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Não há nenhuma unidade de medida cadastrada no banco, não foi possivel busca-las.'
            });
        }
        res.status(HttpStatus.OK)
            .location(`/user/`)
            .json(measurementUnitSearched);
    }

    @Get('/:id')
    async getOneById(@Param() params, @Res() res) {
        const measurementUnitSearched = await this.measumentUnitService.getOneById(params.id);
        if (!measurementUnitSearched) {
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Id informado não corresponde a nenhuma unidade de medida no banco, não foi posivel busca-la.'
            });
        }
        res.status(HttpStatus.OK)
            .location(`/user/${params.id}`)
            .json(measurementUnitSearched);
    }

    @Post()
    async create(@Body() body: MeasurementUnitValidator, @Res() res) {
        const measurementUnitCreated = await this.measumentUnitService.create(body);
        res.status(HttpStatus.CREATED)
            .location(`/measurementunit/${body.id}`)
            .json(measurementUnitCreated);
    }

    // @Put()
    // async update(@Body() body: MeasurementUnitValidator, @Res() res) {
    //     const measurementUnitUpdated = await this.measumentUnitService.update(body);
    //     if (!!!measurementUnitUpdated[0]) {
    //         throw new NotFoundException({
    //             statusCode: HttpStatus.NO_CONTENT,
    //             message: 'Id informado não corresponde a nenhuma unidade de medida no banco, não foi possivel atualiza-la.'
    //         })
    //     }
    //     res.status(HttpStatus.OK)
    //         .location(`/measurementunit/${body.id}`)
    //         .json(measurementUnitUpdated);
    // }

    // @Delete(':id')
    // async deleteOneById(@Param() params, @Res() res) {
    //     const measurementUnitDeleted = await this.measumentUnitService.deleteOneById(params.id);
    //     if (!measurementUnitDeleted) {
    //         throw new NotFoundException({
    //             statusCode: HttpStatus.NO_CONTENT,
    //             message: 'Id informado não corresponde a nenhuma unidade de medida, não foi possivel exclui-la.'
    //         })
    //     }
    //     res.status(HttpStatus.OK)
    //         .location(`/measurementunit/${params.id}`)
    //         .json(measurementUnitDeleted);
    // }
}
