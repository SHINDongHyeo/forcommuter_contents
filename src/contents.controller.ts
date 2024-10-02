import { Controller, Get } from '@nestjs/common';
import { ContentsService } from './contents.service';
import YoutubeHot from './entities/youtube_hot.entitiy';

@Controller('contents')
export class ContentsController {
	constructor(private readonly contentsService: ContentsService) {}

	@Get('youtube')
	getAllYouTubeVideos(): Promise<YoutubeHot[]> {
		return this.contentsService.getAllYouTubeVideos();
	}
}
