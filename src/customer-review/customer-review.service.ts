/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { CreateCustomerReviewDto } from "./dto/create-customer-reviews-dto";
import { UpdateCustomerReviewDto } from "./dto/update-customer-reviews-dto";

import { Customer_Review, Customer_ReviewDocument } from "./schemas/customer-review.schema";

@Injectable()
export class CustomerReviewService {
  constructor(@InjectModel(Customer_Review.name) private CustomerReviewModel: Model<Customer_ReviewDocument>) {}

  async create(createCustomerReviewDto: CreateCustomerReviewDto): Promise<Customer_Review> {
    const createAdviceLetter = new this.CustomerReviewModel(createCustomerReviewDto);
    return createAdviceLetter.save();
  }
  async show(_id: ObjectId): Promise<Customer_Review> {
    return this.CustomerReviewModel.findById(_id).exec();
  }
  async showAll(page: number, limit: number): Promise<any> {
    const data = await this.CustomerReviewModel.find()
      .limit(limit)
      .skip(limit * (page - 1))
      .sort({ name: "desc" })
      .exec();
    const count = await this.CustomerReviewModel.find().count();
    return { data: data, total: count };
  }
  async update(_id: ObjectId, updateCustomerReviewDto: UpdateCustomerReviewDto): Promise<Customer_Review> {
    await this.CustomerReviewModel.findOneAndUpdate(_id, updateCustomerReviewDto).exec();
    return this.CustomerReviewModel.findById(_id).exec();
  }
  async delete(_id: ObjectId): Promise<Customer_Review> {
    return this.CustomerReviewModel.findOneAndDelete(_id).exec();
  }
  async search(keyWord: any, limit: number, page: number): Promise<any> {
    const data = await this.CustomerReviewModel.find({
      $or: [{ email: { $regex: keyWord, $options: "i" } }, { phoneNumber: { $regex: keyWord, $options: "i" } }],
    })
      .limit(limit)
      .skip(limit * (page - 1))
      .sort({ name: "desc" })
      .exec();

    const count = await this.CustomerReviewModel.find({
      $or: [{ name: { $regex: keyWord, $options: "i" } }],
    }).count();
    return { data: data, total: count };
  }
}
