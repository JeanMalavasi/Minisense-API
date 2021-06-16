import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Res } from "@nestjs/common";
import { Public } from "src/app.controller";
import { BcryptPasswordTransform } from "./pipes/bcryptPasswordTransform.pipe";
import { UserService } from "./user.service";
import { UserValidator } from "./userValidator.model";

@Controller('user')
export class UserController {

    constructor(private userService: UserService) { }
    @Get()
    async getAll(@Res() res) {
        const userSearched = await this.userService.getAll();
        if (!userSearched.length) {
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Não há nenhum usuario cadastrado no banco, não foi possivel busca-los.'
            });
        }
        res.status(HttpStatus.OK)
            .location(`/user`)
            .json(userSearched);
    }
    
    @Get(':id')
    async getOneById(@Param() params, @Res() res) {
        const userSearched = await this.userService.getOneById(params.id)
        if (!userSearched) {
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Id informado não corresponde a nenhum usuario no banco, não foi possivel busca-lo.'
            })
        }
        res.status(HttpStatus.OK)
            .location(`/user/${params.id}`)
            .json(userSearched);
    }

    @Get('email/:email')
    async getOneByEmail(@Param() params, @Res() res) {
        const userSearched = await this.userService.getOneByEmail(params.email)
        if (!userSearched) {
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Email informado não corresponde a nenhum usuario no banco, não foi possivel busca-lo.'
            })
        }
        res.status(HttpStatus.OK)
            .location(`/user/${params.email}`)
            .json(userSearched);
    }

    @Public()
    @Post()
    async create(@Body(new BcryptPasswordTransform()) body: UserValidator, @Res() res) {
        const userCreated = await this.userService.create(body)
        res.status(HttpStatus.CREATED)
            .location(`/user/${body.email}`)
            .json(userCreated);
    }

    @Put()
    async update(@Body() body: UserValidator, @Res() res) {
        if(body.id == null){
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Id informado não corresponde a nenhum usuario, não foi possivel atualiza-lo.'
            })
        }
        const userUpdated = await this.userService.update(body) 
        if (!!!userUpdated[0]) {
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Id informado não corresponde a um usuario, não foi possivel atualiza-lo.'
            })
        }
        res.status(HttpStatus.OK)
            .location(`/user/${body.id}`)
            .json(userUpdated);
    }

    @Delete(':id')
    async deleteOneById(@Param() params, @Res() res) {

        const userDeleted = await this.userService.deleteOneById(params.id)
        if (!userDeleted) {
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Id informado não corresponde a nenhum usuario, não foi possivel deleta-lo.'
            })
        }
        res.status(HttpStatus.OK)
            .location(`/user/${params.id}`)
            .json(userDeleted);
    }

}