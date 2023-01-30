/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable prettier/prettier */

import { Exclude } from "class-transformer";
import {
  IsBooleanString,
  IsDateString,
  IsEmail,
  IsEmpty,
  IsMilitaryTime,
  IsNumberString,
  IsOptional,
  IsString,
  ValidateIf,
} from "class-validator";

export class UpdateFeServiceDto {
  @IsOptional()
  @IsNumberString()
  limit?: string;

  @IsMilitaryTime()
  @IsOptional()
  time?: string;

  @IsNumberString()
  @IsOptional()
  rate?: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  url?: string;
}
