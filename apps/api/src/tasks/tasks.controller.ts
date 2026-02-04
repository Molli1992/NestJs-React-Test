import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('/tasks')
export class TaskController {
  constructor(private taskService: TasksService) {}

  @Get('/:id')
  getTask() {
    return this.taskService.getTaskById();
  }

  @Get('/')
  getAllTasks() {
    return this.taskService.getTasks();
  }

  @Post('/')
  createTask() {
    return this.taskService.createTask();
  }

  @Put('/')
  updateTask() {
    return this.taskService.updateTask();
  }

  @Delete('/')
  deleteTask() {
    return this.taskService.deleteTask();
  }
}
