import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(userEmail: string, pass: string): Promise<{
        username: string;
        email: string;
        sensorDviceId: import("../sensorDevice/sensorDevice.model").SensorDevice[];
        id?: any;
        createdAt?: any;
        updatedAt?: any;
        deletedAt?: any;
        version?: any;
        isNewRecord: boolean;
        sequelize: import("sequelize/types").Sequelize;
    }>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
