import { IsDate, IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { IsMeasurementUnitExist } from "src/common/pipes/measurementUnitExistValidator.pipe";
import { IsDataStreamExist } from "./pipes/dataStreamExistValidator.pipe";
import { IsTimestampFormat } from "./pipes/timestampFormtValidator.pipe";

export class SensordataValidator {

    id?: string

    @IsTimestampFormat({
            message: 'O campo timestamp, deve ser uma string seguindo o modelo: YYYY-MM-DD,HH:MM:SS'
    })
    timestamp: Date

    @IsNumber({}, {
        message: 'O campo valor, deve ser um number.'
    })
    @IsNotEmpty({
        message: 'O campo valor, não deve ser vazio.'
    })
    value: number

    @IsNumber({}, {
        message: 'O campo dataStreamId, deve ser um number.'
    })
    @IsNotEmpty({
        message: 'O campo dataStreamId, não deve ser vazio.'
    })
    @IsDataStreamExist({
        message: 'O campo dataStreamId, deve ser referenciado com um Id de um dataStream existente.'
    })
    dataStreamId: number

    @IsNumber({}, {
        message: 'O campo measurementUnitId, deve ser um number.'
    })
    @IsNotEmpty({
        message: 'O campo measurementUnitId, não deve ser vazio.'
    })
    @IsMeasurementUnitExist({
        message: 'O campo measurementUnitId, deve ser referenciado com um Id de um measurementUnit existente.'
    })
    measurementUnitId: number
}