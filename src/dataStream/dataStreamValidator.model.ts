import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { IsMeasurementUnitExist } from "../common/pipes/measurementUnitExistValidator.pipe";
import { IsSensorDeviceExist } from "./pipes/sensorDeviceExistValidator.pipe";

export class DataStreamValidator {

    id?: string
    key?: string

    @IsString({
        message: 'O campo apelido, deve ser uma string.'
    })
    @IsNotEmpty({
        message: 'O campo apelido, não deve ser vazio.'
    })
    label: string

    
    enabled?: boolean

    @IsNumber({}, {
        message: 'O campo sensorDeviceId, deve ser um number.'
    })
    @IsNotEmpty({
        message: 'O campo sensorDeviceId, não deve ser vazio.'
    })
    @IsSensorDeviceExist({
        message: 'O campo sensorDeviceId, deve ser referenciado com um Id de um sensorDevice existente.'
    })
    sensorDeviceId: number

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