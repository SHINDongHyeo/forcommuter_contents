import { Controller, Get, Query } from '@nestjs/common';
import { ContentsService } from './contents.service';
import { ClassDto } from './dtos/class.dto';
import { YouTubeDto } from './dtos/youtube.dto';
import { Category, SubCategory } from './contents.interface';

@Controller('contents')
export class ContentsController {
	constructor(private readonly contentsService: ContentsService) {}

	// 강의
	@Get('class')
	getClass(
		@Query('category') category?: Category,
		@Query('subCategory') subCategory?: SubCategory,
		@Query('take') take?: number,
		@Query('lastId') lastId?: number,
	): Promise<{ classes: ClassDto[]; noMoreData: boolean }> {
		return this.contentsService.getClass(
			category,
			subCategory,
			take,
			lastId,
		);
	}

	// 유튜브
	@Get('youtube/hot')
	getYouTubeHot(): Promise<YouTubeDto[]> {
		return this.contentsService.getYouTubeHot();
	}

	@Get('youtube/music')
	getYouTubeMusic(): Promise<YouTubeDto[]> {
		return this.contentsService.getYouTubeMusic();
	}

	@Get('youtube/game')
	getYouTubeGame(): Promise<YouTubeDto[]> {
		return this.contentsService.getYouTubeGame();
	}

	@Get('youtube/sports')
	getYouTubeSports(): Promise<YouTubeDto[]> {
		return this.contentsService.getYouTubeSports();
	}
}
