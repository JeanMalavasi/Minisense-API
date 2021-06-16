import { NestResponse } from "./nestResponse";
export declare class NestResponseBuilder {
    private response;
    withStatus(status: number): this;
    withHeader(headers: Object): this;
    withBody(body: Object): this;
    build(): NestResponse;
}
