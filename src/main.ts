import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const port = process.env.NODE_SERVER_PORT;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('title API')
    .setDescription('description test')
    .setVersion('1.0')
    .addCookieAuth('connect.sid')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
  console.log(`${port}`);
}
bootstrap();
