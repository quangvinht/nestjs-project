/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./users/users.module";

import { NewsModule } from "./news/news.module";
import { RecruitmentModule } from "./recruitments/recruitment.module";
import { AdviceLetterModule } from "./advice-letters/advice-letter.module";
import { CustomerReviewModule } from './customer-review/customer-review.module';
import { FeServiceModule } from './fe-service/fe-service.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://vinh:teo0966533714@cluster0.zl2ae4t.mongodb.net/test1"),
    UserModule,
    NewsModule,
    RecruitmentModule,
    AdviceLetterModule,
    CustomerReviewModule,
    FeServiceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
