import { Body, Controller, Get, Logger, Param, Post, Delete, Put } from '@nestjs/common';

import { FindOneParams } from '../global-classes/findOneParams.class';
import { User } from './user-classes/user.class';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService, private logger: Logger) { }

    @Get()
    async getUsers(): Promise<any[]> {
        return this.userService.findAll();
    }

    @Post()
    async create(@Body() createUserDto: User): Promise<User> {
        return this.userService.create(createUserDto);
    }

    @Get(':id')
    async getUserById(@Param() params: FindOneParams): Promise<User> {
        return this.userService.findOne(params.id);
    }

    @Delete(':id')
    async delete(@Param() params: FindOneParams): Promise<User> {
        return this.userService.deleteUser(params.id);
    }

    @Put(':id')
    async updateUser(@Param() params: FindOneParams, @Body() userDto: User): Promise<User> {
        return this.userService.updateUser(params.id, userDto);
    }
}
