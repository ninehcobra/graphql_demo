import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

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
