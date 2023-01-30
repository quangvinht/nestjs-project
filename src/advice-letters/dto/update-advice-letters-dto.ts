/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable prettier/prettier */

import { Exclude } from "class-transformer";
import {
  IsBooleanString,
  IsDateString,
  IsEmail,
  IsEmpty,
  IsNumberString,
  IsOptional,
  IsString,
  ValidateIf,
} from "class-validator";

export class UpdateAdviceLetterDto {
  //@Exclude()
  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  name?: string;

  @IsOptional()
  @IsNumberString()
  phoneNumber?: string;

  @IsDateString()
  @IsOptional()
  sendDate?: string;

  @IsOptional()
  @IsString()
  content?: string;

  @IsBooleanString()
  @IsOptional()
  status?: string;
}
