import { DocumentBuilder } from '@nestjs/swagger';

const swaggerConfig = new DocumentBuilder()
  .setTitle('Shopping online app')
  .setDescription('This project is made for intern work')
  .setVersion('1.0')
  .addBearerAuth({
    type: 'http',
    scheme: 'bearer',
    bearerFormat: 'JWT',
    description: 'JWT token',
    name: 'JWT',
    in: 'header',
  })
  .build();

export default swaggerConfig;
