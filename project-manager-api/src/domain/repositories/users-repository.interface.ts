import { DeepPartial } from 'typeorm';
import { IUser } from '../interfaces/user.interfaces';
export interface IUsersRepository {
    findById(id: number): Promise<IUser|null>;
    add(payload: DeepPartial<IUser>): Promise<IUser>;
}
