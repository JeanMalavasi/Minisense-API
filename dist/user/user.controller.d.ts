import { UserService } from "./user.service";
import { UserValidator } from "./userValidator.model";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getAll(res: any): Promise<void>;
    getOneById(params: any, res: any): Promise<void>;
    getOneByEmail(params: any, res: any): Promise<void>;
    create(body: UserValidator, res: any): Promise<void>;
    update(body: UserValidator, res: any): Promise<void>;
    deleteOneById(params: any, res: any): Promise<void>;
}
