import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { FeServiceController } from "./fe-service.controller";
import { FeServiceService } from "./fe-service.service";
import { Fe_Service, Fe_ServiceSchema } from "./schemas/fe-service.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: Fe_Service.name, schema: Fe_ServiceSchema }])],

  controllers: [FeServiceController],
  providers: [FeServiceService],
})
export class FeServiceModule {}
