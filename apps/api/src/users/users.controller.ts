import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/:id')
  getUser() {
    return this.usersService.getUserById();
  }

  @Get('/')
  getAllUsers() {
    return this.usersService.getUsers();
  }

  @Post('/')
  createUser() {
    return this.usersService.createUser();
  }

  @Put('/')
  updateUser() {
    return this.usersService.updateUser();
  }

  @Delete('/')
  deleteUser() {
    return this.usersService.deleteUser();
  }
}
