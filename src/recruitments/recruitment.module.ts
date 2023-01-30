import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { UserModule } from "src/users/users.module";

import { RecruitmentController } from "./recruitment.controller";
import { RecruitmentService } from "./recruitment.service";
import { Recruit, RecruitmentSchema } from "./schemas/recruitment.schema";

@Module({
  imports: [UserModule, MongooseModule.forFeature([{ name: Recruit.name, schema: RecruitmentSchema }])],
  controllers: [RecruitmentController],
  providers: [RecruitmentService],
})
export class RecruitmentModule {}
