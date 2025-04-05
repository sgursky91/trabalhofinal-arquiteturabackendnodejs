import { IProject } from 'src/domain/interfaces/project.interfaces';
import { ITask } from 'src/domain/interfaces/task.interfaces';
import { IUser } from 'src/domain/interfaces/user.interfaces';
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { ProjectEntity } from './project.entity';
import { UserEntity } from './user.entity';
@Entity('task')
export class TaskEntity implements ITask {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ name: 'name', nullable: false })
    name: string;
    @Column({ name: 'status', nullable: false })
    status: 'pending' | 'completed';
    @ManyToOne(() => ProjectEntity, (project) => project.tasks, {
        cascade: true,
        nullable: false,
    })
    project: IProject;
    @ManyToOne(() => UserEntity, (user) => user.tasks)
    @JoinColumn()
    user: IUser;
}
