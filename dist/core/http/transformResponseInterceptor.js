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
exports.TransformResponseItercepetor = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const operators_1 = require("rxjs/operators");
const nestResponse_1 = require("./nestResponse");
let TransformResponseItercepetor = class TransformResponseItercepetor {
    constructor(adapterHost) {
        this.httpAdapter = adapterHost.httpAdapter;
    }
    intercept(context, next) {
        console.log("antes do controller");
        return next.handle()
            .pipe(operators_1.map((responseToController) => {
            if (responseToController instanceof nestResponse_1.NestResponse) {
                const contexto = context.switchToHttp();
                const response = contexto.getResponse();
                const { headers, status, body } = responseToController;
                const headersName = Object.getOwnPropertyNames(headers);
                headersName.forEach(nameOfHeader => {
                    const headerValue = headers[nameOfHeader];
                    this.httpAdapter.setHeader(response, nameOfHeader, headerValue);
                });
                this.httpAdapter.status(response, status);
                return body;
            }
            console.log("depois do controller sem nestResponse");
            return responseToController;
        }));
    }
};
TransformResponseItercepetor = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [core_1.HttpAdapterHost])
], TransformResponseItercepetor);
exports.TransformResponseItercepetor = TransformResponseItercepetor;
//# sourceMappingURL=transformResponseInterceptor.js.map