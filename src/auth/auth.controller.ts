import { 
    Controller,
    Post 
} from '@nestjs/common';

@Controller('auth')
export class AuthController {
    @Post('/create')
    create():string{
        return 'creating user'
    }
}
