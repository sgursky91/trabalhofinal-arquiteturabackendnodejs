import { IProject } from 'src/domain/interfaces/project.interfaces';
import { ITask } from 'src/domain/interfaces/task.interfaces';
import { IUser } from 'src/domain/interfaces/user.interfaces';
import {
Column,
Entity,
JoinColumn,
ManyToOne,
OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { TaskEntity } from './task.entity';
import { UserEntity } from './user.entity';
@Entity('project')
export class ProjectEntity implements IProject {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ name: 'name', nullable: false })
    name: string;
    @Column({ name: 'description', nullable: false })
    description: string;
    @OneToMany(() => TaskEntity, (task) => task.project)
    tasks: ITask[];
    @ManyToOne(() => UserEntity, (user) => user.projects)
    @JoinColumn()
    user: IUser;
}
