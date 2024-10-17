import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LessThan, MoreThan, Repository } from 'typeorm';
import { ClassDto } from './dtos/class.dto';
import Class from './entities/class.entitiy';
import { YouTubeDto } from './dtos/youtube.dto';
import YoutubeHot from './entities/youtube_hot.entitiy';
import YoutubeMusic from './entities/youtube_music.entitiy';
import YoutubeGame from './entities/youtube_game.entitiy';
import YoutubeSports from './entities/youtube_sports.entitiy';

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
	async getClass(take: number, lastId: number): Promise<ClassDto[]> {
		const takeNumber = isNaN(take) ? take : 20;
		let classes;

		if (isNaN(lastId)) {
			classes = await this.classRepository.find({
				order: { createdAt: 'DESC' },
				take: take,
				relations: ['instructor'],
			});
		} else {
			classes = await this.classRepository.find({
				where: {
					id: LessThan(lastId),
				},
				order: { createdAt: 'DESC' },
				take: take,
				relations: ['instructor'],
			});
		}
		return classes.map(ClassDto.fromEntity);
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
