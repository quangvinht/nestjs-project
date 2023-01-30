/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { NewsService } from "./news.service";
import { NewsController } from "./news.controller";

import { UserModule } from "src/users/users.module";
import { MongooseModule } from "@nestjs/mongoose";
import { NewsSchema, News } from "./schemas/news.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: News.name, schema: NewsSchema }])],
  providers: [NewsService],
  controllers: [NewsController],
})
export class NewsModule {}
