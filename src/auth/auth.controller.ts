import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { Public } from 'src/app.controller';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guard/localAuth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Public()
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
        console.log(req.user)
        return this.authService.login(req.user);
    }
}
