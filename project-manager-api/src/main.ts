/* 
 Copyright (c) 2025 Luis Felipe Ferin Sgursky
 Licensed under the MIT License.
*/
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
