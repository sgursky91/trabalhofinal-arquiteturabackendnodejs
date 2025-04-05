/* 
 Copyright (c) 2025 Luis Felipe Ferin Sgursky
 Licensed under the MIT License.
*/
import { IProject } from './project.interfaces';
import { ITask } from './task.interfaces';

export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    projects: IProject[];
    tasks: ITask[];
}