/* eslint-disable prettier/prettier */
import { IsArray, IsDateString, IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateRecruitDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  workList: string;

  @IsString()
  @IsNotEmpty()
  detailWork: string;

  @IsString()
  @IsOptional()
  note = "Nothing";

  @IsArray()
  images: string[];

  @IsDateString()
  @IsOptional()
  postDate: string = new Date().toISOString();

  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  @IsString()
  @IsOptional()
  poster: string = "";

  @IsString()
  @IsOptional()
  address: string;
}
