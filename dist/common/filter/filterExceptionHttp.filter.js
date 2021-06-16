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
exports.FilterExceptionHttp = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
let FilterExceptionHttp = class FilterExceptionHttp {
    constructor(adapterHost) {
        this.httpAdapter = adapterHost.httpAdapter;
    }
    catch(exception, host) {
        const context = host.switchToHttp();
        const request = context.getRequest();
        const response = context.getResponse();
        const { status, body } = exception instanceof common_1.HttpException ? {
            status: exception.getStatus(),
            body: exception.getResponse()
        } : {
            status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
            body: {
                statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                timesStamp: new Date().toISOString(),
                message: exception.message,
                path: request.path
            }
        };
        this.httpAdapter.reply(response, body, status);
    }
};
FilterExceptionHttp = __decorate([
    common_1.Catch(),
    __metadata("design:paramtypes", [core_1.HttpAdapterHost])
], FilterExceptionHttp);
exports.FilterExceptionHttp = FilterExceptionHttp;
//# sourceMappingURL=filterExceptionHttp.filter.js.map