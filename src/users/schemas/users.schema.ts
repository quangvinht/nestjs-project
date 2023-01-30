/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  userName: string;

  @Prop()
  identifyCard: string;

  @Prop()
  birthDate: string;

  @Prop()
  phoneNumber: string;

  @Prop()
  email: string;

  @Prop()
  accountName: string;

  @Prop()
  password: string;

  @Prop()
  workDate: string;

  @Prop()
  position: string;

  @Prop()
  salary: string;

  @Prop()
  status: string;

  @Prop()
  lastSignupDate: string;

  @Prop()
  avatarUrl: string;

  @Prop()
  archive: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

// export const UserSchema = new mongoose.Schema({
//   // _id: Schema.Types.ObjectId,

//   userName: String,

//   identifyCard: String,

//   birthDate: String,

//   phoneNumber: String,

//   email: String,

//   accountName: String,

//   password: String,

//   workDate: String,

//   position: String,

//   salary: String,

//   status: String,

//   lastSignupDate: String,

//   avatarUrl: String,

//   //news: [{ type: Schema.Types.ObjectId, ref: "New" }],

//   //recruits: [{ type: Schema.Types.ObjectId, ref: "Recruit" }],
// });
