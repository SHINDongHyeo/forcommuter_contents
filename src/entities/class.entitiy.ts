import {
	Entity,
	Column,
	CreateDateColumn,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
} from 'typeorm';
import ClassCategory from './class_category.entitiy';
import ClassSubCategory from './class_sub_category.entitiy';
import ClassInstructor from './class_instructor.entitiy';

@Entity()
class Class {
	@PrimaryGeneratedColumn({ name: 'id', type: 'int' })
	id: number;

	@Column({ type: 'text' })
	title: string;

	@Column({ name: 'description', type: 'text' })
	description: string;

	@Column({ name: 'price', type: 'int' })
	price: number;

	@Column({ name: 'thumbnail_url', type: 'varchar', length: 100 })
	thumbnailUrl: string;

	@Column({ name: 'sold_count', type: 'int', default: 0 })
	soldCount: number;

	@Column({ name: 'rated_count', type: 'int', default: 0 })
	ratedCount: number;

	@Column({ name: 'rating', type: 'int', default: 0 })
	rating: number;

	@CreateDateColumn({ name: 'created_at', type: 'timestamp' })
	createdAt: Date;

	@ManyToOne(() => ClassCategory, (classCategory) => classCategory.name, {
		onUpdate: 'CASCADE',
		onDelete: 'CASCADE',
		nullable: false,
	})
	@JoinColumn({ name: 'category' })
	category: ClassCategory;

	@ManyToOne(
		() => ClassSubCategory,
		(classSubCategory) => classSubCategory.name,
		{
			onUpdate: 'CASCADE',
			onDelete: 'CASCADE',
			nullable: false,
		},
	)
	@JoinColumn({ name: 'sub_category' })
	subCategory: ClassSubCategory;

	@ManyToOne(() => ClassInstructor, (instructor) => instructor.id, {
		onUpdate: 'CASCADE',
		onDelete: 'CASCADE',
		nullable: false,
	})
	@JoinColumn({ name: 'instructor' })
	instructor: ClassInstructor;
}
export default Class;
