import { BaseEntity } from './base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class User extends BaseEntity {
    @Column({ type: 'varchar', length: 300 })
    firstName: string;

    @Column({ type: 'varchar', length: 300, nullable: true })
    middleName: string;

    @Column({ type: 'varchar', length: 300 })
    lastName: string;

    @Column({ type: 'varchar', length: 300, unique: true })
    email: string;

    @Column({ type: 'varchar', length: 300 })
    password: string;

    @Column({ type: 'timestamptz', nullable: true })
    age: Date;

    @Column({ type: 'varchar', length: 300, nullable: true })
    icon: string;
}
