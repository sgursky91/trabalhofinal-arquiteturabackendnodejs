/* 
 Copyright (c) 2025 Luis Felipe Ferin Sgursky
 Licensed under the MIT License.
*/
import { IProject } from "../interfaces/project.interfaces";
import { ITask } from "../interfaces/task.interfaces";
import { IUser } from "../interfaces/user.interfaces";

export class Project implements IProject {
    id: number;
    name: string;
    description: string;
    tasks: ITask[];
    user: IUser;

}