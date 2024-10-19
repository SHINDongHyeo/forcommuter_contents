import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, LessThan, MoreThan, Repository } from 'typeorm';
import { ClassDto } from './dtos/class.dto';
import Class from './entities/class.entitiy';
import { YouTubeDto } from './dtos/youtube.dto';
import YoutubeHot from './entities/youtube_hot.entitiy';
import YoutubeMusic from './entities/youtube_music.entitiy';
import YoutubeGame from './entities/youtube_game.entitiy';
import YoutubeSports from './entities/youtube_sports.entitiy';
import { Category, SubCategory } from './contents.interface';

@Injectable()
export class ContentsService {
	constructor(
		@InjectRepository(Class)
		private readonly classRepository: Repository<Class>,
		@InjectRepository(YoutubeHot)
		private readonly youTubeHotRepository: Repository<YoutubeHot>,
		@InjectRepository(YoutubeMusic)
		private readonly youTubeMusicRepository: Repository<YoutubeMusic>,
		@InjectRepository(YoutubeGame)
		private readonly youTubeGameRepository: Repository<YoutubeGame>,
		@InjectRepository(YoutubeSports)
		private readonly youTubeSportsRepository: Repository<YoutubeSports>,
	) {}

	// 강의
	async getClass(
		category?: Category,
		subCategory?: SubCategory,
		take?: number,
		lastId?: number,
	): Promise<{ classes: ClassDto[]; noMoreData: boolean }> {
		const takeNumber = isNaN(take) ? take : 20;

		const findOptions: FindManyOptions<Class> = {
			order: { createdAt: 'DESC' },
			take: take,
			relations: ['instructor', 'category', 'subCategory'],
			where: {},
		};

		if (subCategory) {
			findOptions.where['subCategory'] = { name: subCategory };
		} else {
			if (category) {
				findOptions.where['category'] = { name: category };
			}
		}

		if (!isNaN(lastId)) {
			findOptions.where['id'] = LessThan(lastId);
		}

		const classes = await this.classRepository.find(findOptions);
		const noMoreData = classes.length < take;

		return {
			classes: classes.map(ClassDto.fromEntity),
			noMoreData: noMoreData,
		};
	}

	// 유튜브
	async getYouTubeHot(): Promise<YouTubeDto[]> {
		const youTubes = await this.youTubeHotRepository.find({
			take: 20,
		});

		return youTubes.map(YouTubeDto.fromEntity);
	}

	async getYouTubeMusic(): Promise<YouTubeDto[]> {
		const youTubes = await this.youTubeMusicRepository.find({
			take: 20,
		});

		return youTubes.map(YouTubeDto.fromEntity);
	}

	async getYouTubeGame(): Promise<YouTubeDto[]> {
		const youTubes = await this.youTubeGameRepository.find({
			take: 20,
		});

		return youTubes.map(YouTubeDto.fromEntity);
	}

	async getYouTubeSports(): Promise<YouTubeDto[]> {
		const youTubes = await this.youTubeSportsRepository.find({
			take: 20,
		});

		return youTubes.map(YouTubeDto.fromEntity);
	}
}
