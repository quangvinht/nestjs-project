/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable prettier/prettier */

import {
  IsBooleanString,
  IsDateString,
  IsEmail,
  IsMilitaryTime,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
} from "class-validator";

export class CreateFeServiceDto {
  @IsNotEmpty()
  @IsNumberString()
  limit: string;

  @IsDateString()
  @IsOptional()
  time: string = new Date().toISOString();

  @IsNumberString()
  @IsNotEmpty()
  rate: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  url?: string = "";
}
