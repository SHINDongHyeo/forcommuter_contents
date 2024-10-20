import { Module } from '@nestjs/common';
import { ContentsController } from './contents.controller';
import { ContentsService } from './contents.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import YouTubeHot from './entities/youtube_hot.entitiy';
import YoutubeGame from './entities/youtube_game.entitiy';
import YoutubeMusic from './entities/youtube_music.entitiy';
import YoutubeSports from './entities/youtube_sports.entitiy';
import Class from './entities/class.entitiy';
import ClassCategory from './entities/class_category.entitiy';
import ClassSubCategory from './entities/class_sub_category.entitiy';
import ClassInstructor from './entities/class_instructor.entitiy';

@Module({
	imports: [
		ConfigModule.forRoot({}),
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: process.env.DB_HOST,
			port: parseInt(process.env.DB_PORT, 10),
			username: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_NAME,
			entities: [
				Class,
				ClassInstructor,
				ClassCategory,
				ClassSubCategory,
				YouTubeHot,
				YoutubeGame,
				YoutubeMusic,
				YoutubeSports,
			],
			synchronize: true,
		}),
		TypeOrmModule.forFeature([
			Class,
			ClassInstructor,
			ClassCategory,
			ClassSubCategory,
			YouTubeHot,
			YoutubeGame,
			YoutubeMusic,
			YoutubeSports,
		]),
	],
	controllers: [ContentsController],
	providers: [ContentsService],
})
export class ContentsModule {}
