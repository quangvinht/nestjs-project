/* eslint-disable prettier/prettier */

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type Fe_ServiceDocument = HydratedDocument<Fe_Service>;

@Schema()
export class Fe_Service {
  @Prop()
  limit: string;

  @Prop()
  time: string;

  @Prop()
  rate: string;

  @Prop()
  name: string;

  @Prop()
  url: string;
}

export const Fe_ServiceSchema = SchemaFactory.createForClass(Fe_Service);
