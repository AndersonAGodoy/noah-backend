import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3001', // origem do seu frontend
    credentials: true, // se for usar cookies/autenticação
  });
  await app.listen(process.env.PORT ?? 3000);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //remove chave que não estão no DTO
      forbidNonWhitelisted: true, // proibe chaves que não estão no DTO
    }),
  );
}
void bootstrap();
