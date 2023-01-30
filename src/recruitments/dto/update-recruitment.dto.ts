/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable prettier/prettier */

import { IsArray, IsDateString, IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateRecruitDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  workList?: string;

  @IsString()
  @IsOptional()
  detailWork?: string;

  @IsString()
  @IsOptional()
  note?: string;

  @IsArray()
  @IsOptional()
  images?: string[];

  @IsDateString()
  @IsOptional()
  postDate?: string;

  @IsString()
  @IsOptional()
  poster?: string;

  @IsString()
  @IsOptional()
  address?: string;
}
