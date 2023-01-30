/* eslint-disable prettier/prettier */
import * as mongoose from "mongoose";

// export const Advice_Letter_Schema = new mongoose.Schema({
//   email: String,

//   phoneNumber: String,

//   sendDate: String,

//   content: String,

//   status: String,
// });
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type Customer_ReviewDocument = HydratedDocument<Customer_Review>;

@Schema()
export class Customer_Review {
  @Prop()
  name: string;

  @Prop()
  review: string;
}

export const CustomerReviewSchema = SchemaFactory.createForClass(Customer_Review);
