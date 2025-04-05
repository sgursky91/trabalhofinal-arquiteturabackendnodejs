/* 
 Copyright (c) 2025 Luis Felipe Ferin Sgursky
 Licensed under the MIT License.
*/
import { IProject } from "../interfaces/project.interfaces";
import { ITask } from "../interfaces/task.interfaces";
import { IUser } from "../interfaces/user.interfaces";

export class User implements IUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    projects: IProject[];
    tasks: ITask[];
}