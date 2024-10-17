import { Category } from 'src/contents.interface';
import {
	Entity,
	Column,
	CreateDateColumn,
	PrimaryColumn,
	OneToMany,
} from 'typeorm';
import ClassSubCategory from './class_sub_category.entitiy';
import Class from './class.entitiy';

@Entity()
class ClassCategory {
	@PrimaryColumn({ name: 'name', type: 'enum', enum: Category })
	name: string;

	@CreateDateColumn({ name: 'created_at', type: 'timestamp' })
	createdAt: Date;

	@OneToMany(
		() => ClassSubCategory,
		(classSubCategory) => classSubCategory.name,
	)
	classSubCategories: ClassSubCategory[];

	@OneToMany(() => Class, (classEntity) => classEntity.id)
	classes: Class[];
}
export default ClassCategory;
