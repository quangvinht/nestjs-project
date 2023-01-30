/* eslint-disable prettier/prettier */
import * as mongoose from "mongoose";
//import { Schema } from "mongoose";

import { HydratedDocument } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { User } from "src/users/schemas/users.schema";

export type RecruitDocument = HydratedDocument<Recruit>;

@Schema()
export class Recruit {
  @Prop()
  title: string;

  @Prop()
  workList: string;

  @Prop()
  detailWork: string;

  @Prop()
  note: string;

  @Prop()
  postDate: string;

  @Prop()
  poster: string;

  @Prop([String])
  images: string[];

  @Prop()
  address: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "User" })
  users: User;
}

export const RecruitmentSchema = SchemaFactory.createForClass(Recruit);

// export const NewSchema = new mongoose.Schema({
//   //_id: mongoose.Schema.Types.ObjectId,

//   title: String,

//   workList: String,

//   detailWork: String,

//   note: String,

//   postDate: String,

//   poster: String,

//   images: Array<string>,

//   users: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
// });
