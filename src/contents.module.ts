import { Module } from '@nestjs/common';
import { ContentsController } from './contents.controller';
import { ContentsService } from './contents.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import YouTubeHot from './entities/youtube_hot.entitiy';

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
			entities: [YouTubeHot],
			synchronize: true,
		}),
		TypeOrmModule.forFeature([YouTubeHot]),
	],
	controllers: [ContentsController],
	providers: [ContentsService],
})
export class ContentsModule {}
