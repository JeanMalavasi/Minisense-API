import { UserService } from './user.service';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { IsEmailUniqueConstranint } from './pipes/emailIsUniqueValidator.pipe';
import { BcryptPasswordTransform } from './pipes/bcryptPasswordTransform.pipe';

@Module({
    imports: [
       SequelizeModule.forFeature([User])
    ],
    controllers: [
        UserController
    ],
    providers: [
        BcryptPasswordTransform,
        IsEmailUniqueConstranint,
        UserService,
    ],
    exports: [
        UserService
    ]
})
export class UserModule {}
