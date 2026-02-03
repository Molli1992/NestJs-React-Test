import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectsService {
  getProjects() {
    return ['project 1', 'project 2', 'project 3'];
  }
}
