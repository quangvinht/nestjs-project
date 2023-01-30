import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from "@nestjs/common";
import { ObjectId } from "mongoose";
import { CustomerReviewService } from "./customer-review.service";
import { CreateCustomerReviewDto } from "./dto/create-customer-reviews-dto";
import { UpdateCustomerReviewDto } from "./dto/update-customer-reviews-dto";
import { Customer_Review } from "./schemas/customer-review.schema";

@Controller("customer-review")
export class CustomerReviewController {
  constructor(private customerReviewService: CustomerReviewService) {}
  @Get(":_id")
  showNew(@Param() _id: ObjectId): Promise<Customer_Review> {
    return this.customerReviewService.show(_id);
  }
  @Get("")
  showAllNews(
    @Query("limit", ParseIntPipe) limit: number,
    @Query("page", ParseIntPipe) page: number,
  ): Promise<Customer_Review[]> {
    return this.customerReviewService.showAll(page, limit);
  }
  @Get("/search/:keyWord")
  searchUser(
    @Param("keyWord") keyWord: any,
    @Query("limit", ParseIntPipe) limit: number,
    @Query("page", ParseIntPipe) page: number,
  ): Promise<Customer_Review[]> {
    return this.customerReviewService.search(keyWord, limit, page);
  }
  @Post()
  storeNew(@Body() createCustomerReviewDto: CreateCustomerReviewDto): Promise<Customer_Review> {
    return this.customerReviewService.create(createCustomerReviewDto);
  }
  @Patch(":_id")
  updateNew(
    @Param() _id: ObjectId,
    @Body() updateCustomerReviewDto: UpdateCustomerReviewDto,
  ): Promise<Customer_Review> {
    return this.customerReviewService.update(_id, updateCustomerReviewDto);
  }
  @Delete(":_id")
  deleteNew(@Param() _id: ObjectId): Promise<Customer_Review> {
    return this.customerReviewService.delete(_id);
  }
}
