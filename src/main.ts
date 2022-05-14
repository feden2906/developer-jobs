import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    allowedHeaders: ['Content-Type', 'Accept', 'Authorization'],
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    origin: '*',
  });

  const options = new DocumentBuilder()
    .setTitle('API documentation')
    .setDescription('API documentation')
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      in: 'header',
    })
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000, '0.0.0.0', () => {
    console.log(`Server is running http://0.0.0.0:${3000}/`);
    // if (!configService.isProduction()) {
    console.log(`Swagger is running http://0.0.0.0:${3000}/docs`);
    // }
  });
}
bootstrap();
