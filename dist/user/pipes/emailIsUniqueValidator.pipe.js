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
exports.IsEmailUnique = exports.IsEmailUniqueConstranint = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const class_validator_1 = require("class-validator");
const user_model_1 = require("../user.model");
let IsEmailUniqueConstranint = class IsEmailUniqueConstranint {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async validate(email, args) {
        if (email) {
            return await this.userModel.findOne({
                where: {
                    email: email
                }
            }) ? false : true;
        }
        return true;
    }
};
IsEmailUniqueConstranint = __decorate([
    common_1.Injectable(),
    class_validator_1.ValidatorConstraint(),
    __param(0, sequelize_1.InjectModel(user_model_1.User)),
    __metadata("design:paramtypes", [Object])
], IsEmailUniqueConstranint);
exports.IsEmailUniqueConstranint = IsEmailUniqueConstranint;
function IsEmailUnique(validationOptions) {
    return function (object, propertyName) {
        class_validator_1.registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsEmailUniqueConstranint,
        });
    };
}
exports.IsEmailUnique = IsEmailUnique;
//# sourceMappingURL=emailIsUniqueValidator.pipe.js.map