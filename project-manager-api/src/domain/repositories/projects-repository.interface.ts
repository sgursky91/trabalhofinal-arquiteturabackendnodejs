import { DeepPartial } from 'typeorm';
import { IProject } from '../interfaces/project.interfaces';
export interface IProjectsRepository {
    findAll(userId: number): Promise<IProject[]>;
    findById(id: number): Promise<IProject | null>;
    add(payload: DeepPartial<IProject>): Promise<IProject>;
}