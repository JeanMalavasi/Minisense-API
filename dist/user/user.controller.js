"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("../app.controller");
const user_service_1 = require("./user.service");
const userValidator_model_1 = require("./userValidator.model");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async getAll(res) {
        const userSearched = await this.userService.getAll();
        if (!userSearched.length) {
            throw new common_1.NotFoundException({
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'Não há nenhum usuario cadastrado no banco, não foi possivel busca-los.'
            });
        }
        res.status(common_1.HttpStatus.OK)
            .location(`/user`)
            .json(userSearched);
    }
    async getOneById(params, res) {
        const userSearched = await this.userService.getOneById(params.id);
        if (!userSearched) {
            throw new common_1.NotFoundException({
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'Id informado não corresponde a nenhum usuario no banco, não foi possivel busca-lo.'
            });
        }
        res.status(common_1.HttpStatus.OK)
            .location(`/user/${params.id}`)
            .json(userSearched);
    }
    async getOneByEmail(params, res) {
        const userSearched = await this.userService.getOneByEmail(params.email);
        if (!userSearched) {
            throw new common_1.NotFoundException({
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'Email informado não corresponde a nenhum usuario no banco, não foi possivel busca-lo.'
            });
        }
        res.status(common_1.HttpStatus.OK)
            .location(`/user/${params.email}`)
            .json(userSearched);
    }
    async create(body, res) {
        const userCreated = await this.userService.create(body);
        res.status(common_1.HttpStatus.CREATED)
            .location(`/user/${body.email}`)
            .json(userCreated);
    }
    async update(body, res) {
        if (body.id == null) {
            throw new common_1.NotFoundException({
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'Id informado não corresponde a nenhum usuario, não foi possivel atualiza-lo.'
            });
        }
        const userUpdated = await this.userService.update(body);
        if (!!!userUpdated[0]) {
            throw new common_1.NotFoundException({
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'Id informado não corresponde a um usuario, não foi possivel atualiza-lo.'
            });
        }
        res.status(common_1.HttpStatus.OK)
            .location(`/user/${body.id}`)
            .json(userUpdated);
    }
    async deleteOneById(params, res) {
        const userDeleted = await this.userService.deleteOneById(params.id);
        if (!userDeleted) {
            throw new common_1.NotFoundException({
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'Id informado não corresponde a nenhum usuario, não foi possivel deleta-lo.'
            });
        }
        res.status(common_1.HttpStatus.OK)
            .location(`/user/${params.id}`)
            .json(userDeleted);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getOneById", null);
__decorate([
    common_1.Get('email/:email'),
    __param(0, common_1.Param()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getOneByEmail", null);
__decorate([
    app_controller_1.Public(),
    common_1.Post(),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [userValidator_model_1.UserValidator, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    common_1.Put(),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [userValidator_model_1.UserValidator, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteOneById", null);
UserController = __decorate([
    common_1.Controller('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map