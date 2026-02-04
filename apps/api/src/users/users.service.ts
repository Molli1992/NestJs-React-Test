import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUserById() {
    return ['User 1'];
  }

  getUsers() {
    return ['User 1', 'User 2', 'User 3'];
  }

  createUser() {
    return "User created";
  }

  updateUser() {
    return "User updated";
  }

  deleteUser() {
    return "User deleted";
  }
}
