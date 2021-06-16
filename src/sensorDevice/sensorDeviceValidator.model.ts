import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { IsUserExist } from "./pipes/userExistValidator.pipe";

export class SensorDeviceValidator {

    
    id?: number
    key?: string

    @IsString({
        message: 'O campo apelido, deve ser uma string.'
    })
    @IsNotEmpty({
        message: 'O campo apelido, não deve ser vazio.'
    })
    label: string

    @IsString({
        message: 'O campo descrição, deve ser uma string.'
    })
    @IsNotEmpty({
        message: 'O campo descrição, não deve ser vazio.'
    })
    description: string

    @IsNumber({}, {
        message: 'O campo userId, deve ser um number.'
    })
    @IsUserExist({
        message: 'O campo userId, deve ser referenciado com um Id de um usuario existente.'
    })
    userId: number
}