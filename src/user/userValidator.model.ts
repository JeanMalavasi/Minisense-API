import { Exclude } from "class-transformer";
import { IsNotEmpty, IsString, IsEmail } from "class-validator";
import { IsEmailUnique } from "./pipes/emailIsUniqueValidator.pipe";


export class UserValidator{
    @Exclude({
        toClassOnly: true
    })
    id?: number

    @IsNotEmpty({
        message: 'O campo de usuario, não deve ser vazio.'
    })
    @IsString({
        message: 'O campo de usuario, deve ser uma string.'
    })
    username: string

    @IsEmail({}, {
        message: 'O campo de email, deve ser uma string seguindo o molde de: exemplo@hotmail.com .'
    })
    @IsEmailUnique({
        message: 'Email já esta em uso, troque por um ainda não cadastrado.'
    })
    email: string

    @IsNotEmpty({
        message: 'O campo de senha, não deve ser vazio.'
    })
    @IsString({
        message: 'O campo de senha, deve ser uma string.'
    })
    password: string
}