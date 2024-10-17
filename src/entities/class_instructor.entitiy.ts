import {
	Entity,
	Column,
	CreateDateColumn,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	OneToMany,
} from 'typeorm';
import ClassCategory from './class_category.entitiy';
import ClassSubCategory from './class_sub_category.entitiy';
import Class from './class.entitiy';

@Entity()
class ClassInstructor {
	@PrimaryGeneratedColumn({ name: 'id', type: 'int' })
	id: number;

	@Column({ type: 'varchar', length: 50 })
	name: string;

	@Column({ name: 'description', type: 'text' })
	description: string;

	@Column({ name: 'class_count', type: 'int', default: 0 })
	classCount: number;

	@Column({ name: 'rated_count', type: 'int', default: 0 })
	ratedCount: number;

	@Column({ name: 'rating', type: 'int', default: 0 })
	rating: number;

	@CreateDateColumn({ name: 'created_at', type: 'timestamp' })
	createdAt: Date;

	@OneToMany(() => Class, (classEntity) => classEntity.id)
	classes: Class[];
}
export default ClassInstructor;
