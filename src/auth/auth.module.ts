import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './guard/strategy/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './guard/strategy/constants';
import { JwtStrategy } from './guard/strategy/jwt.strategy';

@Module({
    imports: [
        PassportModule,
        UserModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '3600s' },
        }),
    ],
    controllers: [
        AuthController,],
    providers: [
        LocalStrategy,
        JwtStrategy,
        AuthService
    ],
    exports: [
        AuthService,
        JwtModule
    ]
})
export class AuthModule { }
