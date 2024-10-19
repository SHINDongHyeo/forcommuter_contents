import { IsNotEmpty, IsString, IsDate, IsNumber } from 'class-validator';
import Class from 'src/entities/class.entitiy';

export class ClassDto {
	@IsNumber()
	@IsNotEmpty()
	id: number;

	@IsString()
	@IsNotEmpty()
	title: string;

	@IsString()
	@IsNotEmpty()
	description: string;

	@IsString()
	@IsNotEmpty()
	instructor: string;

	@IsString()
	@IsNotEmpty()
	category: string;

	@IsString()
	@IsNotEmpty()
	subCategory: string;

	@IsNumber()
	@IsNotEmpty()
	price: number;

	@IsString()
	@IsNotEmpty()
	thumbnailUrl: string;

	@IsNumber()
	@IsNotEmpty()
	soldCount: number;

	@IsNumber()
	@IsNotEmpty()
	ratedCount: number;

	@IsNumber()
	@IsNotEmpty()
	rating: number;

	@IsDate()
	@IsNotEmpty()
	createdAt: Date;

	constructor(partial: Partial<ClassDto>) {
		Object.assign(this, partial);
	}

	static fromEntity(classEntity: Class): ClassDto {
		return new ClassDto({
			id: classEntity.id,
			title: classEntity.title,
			description: classEntity.description,
			instructor: classEntity.instructor.name,
			price: classEntity.price,
			thumbnailUrl: classEntity.thumbnailUrl,
			soldCount: classEntity.soldCount,
			ratedCount: classEntity.ratedCount,
			rating: classEntity.rating,
			category: classEntity.category.name,
			subCategory: classEntity.subCategory.name,
		});
	}
}
