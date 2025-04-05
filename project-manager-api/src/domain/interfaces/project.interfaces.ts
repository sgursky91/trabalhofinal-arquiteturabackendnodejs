/* 
 Copyright (c) 2025 Luis Felipe Ferin Sgursky
 Licensed under the MIT License.
*/
import { ITask } from './task.interfaces';
import { IUser } from './user.interfaces';

export interface IProject {
    id: number;
    name: string;
    description: string;
    tasks: ITask[];
    user: IUser;
}