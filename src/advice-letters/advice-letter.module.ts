import { Module } from "@nestjs/common";
import { Advice_Letter_Service } from "./advice-letter.service";
import { Advice_Letter_Controller } from "./advice-letter.controller";
import { Advice_Letter, AdviceLetterSchema } from "./schemas/advice-letter.schema";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [MongooseModule.forFeature([{ name: Advice_Letter.name, schema: AdviceLetterSchema }])],

  providers: [Advice_Letter_Service],
  controllers: [Advice_Letter_Controller],
})
export class AdviceLetterModule {}
