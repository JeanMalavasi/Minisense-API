import { User } from './user.model';
import { UserValidator } from './userValidator.model';
export declare class UserService {
    private userModel;
    constructor(userModel: typeof User);
    getAll(): Promise<User[]>;
    getOneById(id: number): Promise<User>;
    getOneByEmail(email: string): Promise<User>;
    authByEmail(email: string): Promise<User>;
    create(user: UserValidator): Promise<{
        username: string;
        email: string;
    }>;
    update(user: UserValidator): Promise<[number, User[]]>;
    deleteOneById(id: number): Promise<User>;
}
