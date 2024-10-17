import { SubCategory } from 'src/contents.interface';
import {
	Entity,
	Column,
	CreateDateColumn,
	PrimaryColumn,
	ManyToOne,
	JoinColumn,
	OneToMany,
} from 'typeorm';
import ClassCategory from './class_category.entitiy';
import Class from './class.entitiy';

@Entity()
class ClassSubCategory {
	@PrimaryColumn({ name: 'name', type: 'enum', enum: SubCategory })
	name: string;

	@CreateDateColumn({ name: 'created_at', type: 'timestamp' })
	createdAt: Date;

	@ManyToOne(() => ClassCategory, (classCategory) => classCategory.name, {
		onUpdate: 'CASCADE',
		onDelete: 'CASCADE',
		nullable: false,
	})
	@JoinColumn({ name: 'category' })
	category: ClassCategory;

	@OneToMany(() => Class, (classEntity) => classEntity.id)
	classes: Class[];
}
export default ClassSubCategory;
