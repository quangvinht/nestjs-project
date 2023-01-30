/* eslint-disable prettier/prettier */
import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  const config = new DocumentBuilder()
    .setTitle("Fe-credit API example")
    .setDescription("The Fe-credit API description")
    .setVersion("1.0")
    .addTag("fe-credit")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
