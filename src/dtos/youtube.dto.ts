import { IsEmail, IsEnum, IsNotEmpty, IsString, IsDate, Length, IsNumber } from 'class-validator';
import YoutubeGame from 'src/entities/youtube_game.entitiy';
import YoutubeHot from 'src/entities/youtube_hot.entitiy';
import YoutubeMusic from 'src/entities/youtube_music.entitiy';
import YoutubeSports from 'src/entities/youtube_sports.entitiy';

export class YouTubeDto {
	@IsNumber()
	@IsNotEmpty()
	rank: number;

	@IsString()
	@IsNotEmpty()
	id: string;

	@IsString()
	@IsNotEmpty()
	title: string;

	@IsString()
	@IsNotEmpty()
	thumbnailsUrl: string;

	@IsNumber()
	@IsNotEmpty()
	viewCount: number;

	@IsNumber()
	@IsNotEmpty()
	commentCount: number;

	@IsDate()
	@IsNotEmpty()
	updatedAt: Date;

	constructor(partial: Partial<YouTubeDto>) {
		Object.assign(this, partial);
	}

	static fromEntity(
		youtube: YoutubeGame | YoutubeHot | YoutubeMusic | YoutubeSports,
	): YouTubeDto {
		return new YouTubeDto({
			rank: youtube.rank,
			id: youtube.id,
			title: youtube.title,
			thumbnailsUrl: youtube.thumbnailsUrl,
			viewCount: youtube.viewCount,
			commentCount: youtube.commentCount,
			updatedAt: youtube.updatedAt,
		});
	}
}
