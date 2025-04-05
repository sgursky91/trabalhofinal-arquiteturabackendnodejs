import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { DataSource, DeepPartial, Repository } from 'typeorm';
import { IUser } from 'src/domain/interfaces/user.interfaces';
import { IUsersRepository } from 'src/domain/repositories/users-repository.interface';

@Injectable()
export class UsersRepositoryService
    extends Repository<UserEntity>
    implements IUsersRepository {
    constructor(dataSource: DataSource) {
        super(UserEntity, dataSource.createEntityManager());
    }
    findById(id: number): Promise<IUser | null> {
        const user = this.findOneBy({ id });
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }
    add(payload: DeepPartial<IUser>): Promise<IUser> {
        return this.save(payload) as Promise<IUser>;
    }
    findByEmail(email: string): Promise<IUser|null> {
        return this.findOneBy({ email });
    }
}