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
exports.IsUserExist = exports.UserExistConstranint = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const user_service_1 = require("../../user/user.service");
let UserExistConstranint = class UserExistConstranint {
    constructor(userService) {
        this.userService = userService;
    }
    async validate(userId, args) {
        if (userId) {
            return await this.userService.getOneById(userId) ? true : false;
        }
        return true;
    }
};
UserExistConstranint = __decorate([
    common_1.Injectable(),
    class_validator_1.ValidatorConstraint(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserExistConstranint);
exports.UserExistConstranint = UserExistConstranint;
function IsUserExist(validationOptions) {
    return function (object, propertyName) {
        class_validator_1.registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: UserExistConstranint,
        });
    };
}
exports.IsUserExist = IsUserExist;
//# sourceMappingURL=userExistValidator.pipe.js.map