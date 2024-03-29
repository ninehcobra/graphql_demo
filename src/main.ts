import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const PORT = process.env.PORT || 3333;
  await app
    .listen(PORT)
    .then(() =>
      console.log(
        `Server is listening on port 3000: http://localhost:${PORT}/graphql`,
      ),
    );
}
bootstrap();
