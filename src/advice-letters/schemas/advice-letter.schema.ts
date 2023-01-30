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

export type Advice_LetterDocument = HydratedDocument<Advice_Letter>;

@Schema()
export class Advice_Letter {
  @Prop()
  name: string;

  @Prop()
  contact: string;

  @Prop()
  sendDate: string;

  @Prop()
  content: string;

  @Prop()
  status: string;
}

export const AdviceLetterSchema = SchemaFactory.createForClass(Advice_Letter);
