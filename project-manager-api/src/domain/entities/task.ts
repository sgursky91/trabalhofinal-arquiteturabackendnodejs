/* 
 Copyright (c) 2025 Luis Felipe Ferin Sgursky
 Licensed under the MIT License.
*/
import { IProject } from "../interfaces/project.interfaces";
import { ITask } from "../interfaces/task.interfaces";
import { IUser } from "../interfaces/user.interfaces";

export class Task implements ITask {
    id: number;
    name: string;
    status: 'pending' | 'completed';
    project: IProject;
    user: IUser;

    constructor(id: number, name: string, status: 'pending' | 'completed', project: IProject, user: IUser) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.project = project;
        this.user = user;
    }
}