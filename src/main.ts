import { NestFactory } from '@nestjs/core';
import { ContentsModule } from './contents.module';

async function bootstrap() {
  const app = await NestFactory.create(ContentsModule);
  await app.listen(3000);
}
bootstrap();
