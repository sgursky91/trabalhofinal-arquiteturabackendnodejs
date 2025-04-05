/* 
 Copyright (c) 2025 Luis Felipe Ferin Sgursky
 Licensed under the MIT License.
*/
import {IProject} from './project.interfaces';
import { IUser } from './user.interfaces';

export interface ITask {
    id: number;
    name: string;
    status: 'pending' | 'completed';
    project: IProject;
    user: IUser;
}