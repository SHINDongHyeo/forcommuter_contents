import { Injectable } from '@nestjs/common';
import YoutubeHot from './entities/youtube_hot.entitiy';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ContentsService {
	constructor(
		@InjectRepository(YoutubeHot)
		private readonly youTubeRepository: Repository<YoutubeHot>,
	) {}

	async getAllYouTubeVideos(): Promise<YoutubeHot[]> {
		return await this.youTubeRepository.find({
			take: 20,
		});
	}
}
