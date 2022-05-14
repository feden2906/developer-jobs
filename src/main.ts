import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { EnvConfigService } from './services';

async function bootstrap() {
  const config = new EnvConfigService();
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    allowedHeaders: ['Content-Type', 'Accept', 'Authorization'],
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    origin: '*',
  });

  const host = config.get('HOST');
  const port = config.get('PORT');
  const mode = config.get('MODE');
  const schema = config.get('SCHEMA');
  const swaggerUrl = config.get('SWAGGER_URL');

  const options = new DocumentBuilder()
    .setTitle(`${mode} API documentation`)
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      in: 'header',
    })
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup(swaggerUrl, app, document);

  await app.listen(port, host, () => {
    console.log(`Server is running ${schema}://${host}:${port}`);
    if (mode !== 'PROD') {
      console.log(`Swagger is running ${schema}://${host}:${port}/${swaggerUrl}`);
    }
  });
}
bootstrap();
