/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable prettier/prettier */

import {
  IsBooleanString,
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
} from "class-validator";

export class CreateAdviceLetterDto {
  @IsNotEmpty()
  @IsOptional()
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsNumberString()
  phoneNumber?: string;

  @IsDateString()
  @IsOptional()
  sendDate?: string = new Date().toISOString();

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsBooleanString()
  @IsOptional()
  status: string = "true";
}
