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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidator = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const emailIsUniqueValidator_pipe_1 = require("./pipes/emailIsUniqueValidator.pipe");
class UserValidator {
}
__decorate([
    class_transformer_1.Exclude({
        toClassOnly: true
    }),
    __metadata("design:type", Number)
], UserValidator.prototype, "id", void 0);
__decorate([
    class_validator_1.IsNotEmpty({
        message: 'O campo de usuario, não deve ser vazio.'
    }),
    class_validator_1.IsString({
        message: 'O campo de usuario, deve ser uma string.'
    }),
    __metadata("design:type", String)
], UserValidator.prototype, "username", void 0);
__decorate([
    class_validator_1.IsEmail({}, {
        message: 'O campo de email, deve ser uma string seguindo o molde de: exemplo@hotmail.com .'
    }),
    emailIsUniqueValidator_pipe_1.IsEmailUnique({
        message: 'Email já esta em uso, troque por um ainda não cadastrado.'
    }),
    __metadata("design:type", String)
], UserValidator.prototype, "email", void 0);
__decorate([
    class_validator_1.IsNotEmpty({
        message: 'O campo de senha, não deve ser vazio.'
    }),
    class_validator_1.IsString({
        message: 'O campo de senha, deve ser uma string.'
    }),
    __metadata("design:type", String)
], UserValidator.prototype, "password", void 0);
exports.UserValidator = UserValidator;
//# sourceMappingURL=userValidator.model.js.map