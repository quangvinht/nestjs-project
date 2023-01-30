/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable prettier/prettier */

import { IsArray, IsDateString, IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateNewDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  workList: string;

  @IsString()
  detailWork: string;

  @IsString()
  @IsOptional()
  note: string = "Nothing";

  @IsArray()
  images: string[];

  @IsDateString()
  @IsOptional()
  postDate: string = new Date().toISOString();

  @IsString()
  @IsOptional()
  poster: string = "";
}
