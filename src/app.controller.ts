import { Controller, SetMetadata } from '@nestjs/common';

@Controller()
export class AppController { }
export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
