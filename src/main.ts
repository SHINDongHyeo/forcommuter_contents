import { NestFactory } from '@nestjs/core';
import { ContentsModule } from './contents.module';
import { ConfigService } from '@nestjs/config';
import LoggingInterceptor from './logging.interceptor';

async function bootstrap() {
	const app = await NestFactory.create(ContentsModule);
	const configService = app.get(ConfigService);
	const port = configService.get<number>('NODE_PORT');
	app.useGlobalInterceptors(new LoggingInterceptor());
	await app.listen(port);
}
bootstrap();
