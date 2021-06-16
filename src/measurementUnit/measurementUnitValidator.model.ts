import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { IsSymbolUnique } from "./pipes/symbolUniqueValidator.pipe";

export class MeasurementUnitValidator {

    id?: string

    @IsString({
        message: 'O campo simbolo, deve ser uma string.'
    })
    @IsNotEmpty({
        message: 'O campo simbolo, não deve ser vazio.'
    })
    @IsSymbolUnique({
        message: 'Este simbolo já esta em uso, troque por um ainda não cadastrado.'
    })
    symbol: string

    @IsString({
        message: 'O campo descrição, deve ser uma string.'
    })
    @IsNotEmpty({
        message: 'O campo descrição, não deve ser vazio.'
    })
    description: string
}