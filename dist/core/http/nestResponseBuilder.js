"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestResponseBuilder = void 0;
const nestResponse_1 = require("./nestResponse");
class NestResponseBuilder {
    constructor() {
        this.response = {
            status: 200,
            headers: {},
            body: {}
        };
    }
    withStatus(status) {
        this.response.status = status;
        return this;
    }
    withHeader(headers) {
        this.response.headers = headers;
        return this;
    }
    withBody(body) {
        this.response.body = body;
        return this;
    }
    build() {
        return new nestResponse_1.NestResponse(this.response);
    }
}
exports.NestResponseBuilder = NestResponseBuilder;
//# sourceMappingURL=nestResponseBuilder.js.map