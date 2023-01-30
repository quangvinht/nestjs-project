import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CustomerReviewController } from "./customer-review.controller";
import { CustomerReviewService } from "./customer-review.service";
import { CustomerReviewSchema, Customer_Review } from "./schemas/customer-review.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: Customer_Review.name, schema: CustomerReviewSchema }])],
  controllers: [CustomerReviewController],
  providers: [CustomerReviewService],
})
export class CustomerReviewModule {}
