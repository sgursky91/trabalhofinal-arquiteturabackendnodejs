/* 
 Copyright (c) 2025 Luis Felipe Ferin Sgursky
 Licensed under the MIT License.
*/
import {Module} from '@nestjs/common'
import { ProjectsController } from './projects/projects.controller';
import { TasksController } from './tasks/tasks.controller';
import { UsersController } from './users/users.controller';

@Module({
    controllers: [ProjectsController, TasksController, UsersController],
})
export class ControllersModule {}