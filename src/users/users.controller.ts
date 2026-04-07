import { Controller, Get , Param} from '@nestjs/common';
import { UsersService } from './users.service';
import { get } from 'axios';


@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}
    @Get()
    getAllUsers() {
        return this.usersService.getAllUsers();
    }
    @Get('/role/:role')
    getUsersByRole(@Param('role') role:string){
        return this.usersService.getUsersByRole(String(role));
    }
    @Get(':id')
    getUserById(@Param('id') id:string){
        return this.usersService.getUserById(Number(id));
    }

}
