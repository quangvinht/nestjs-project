/* eslint-disable prettier/prettier */

import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsDate,
  IsNumber,
  IsNumberString,
  IsDateString,
  IsBooleanString,
  IsOptional,
} from "class-validator";

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  userName?: string;

  @IsOptional()
  @IsNumberString()
  identifyCard?: string;

  @IsOptional()
  @IsDateString()
  birthDate?: string;

  @IsNumberString()
  @IsOptional()
  phoneNumber?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  accountName?: string;

  @IsString()
  @IsOptional()
  password?: string;

  @IsDateString()
  @IsOptional()
  workDate?: string;

  @IsString()
  @IsOptional()
  position?: string;

  @IsNumberString()
  @IsOptional()
  salary?: string;

  @IsBooleanString()
  @IsOptional()
  status?: string;

  @IsDateString()
  @IsOptional()
  lastSignupDate?: string;

  @IsOptional()
  @IsString()
  avatarUrl?: string;

  @IsString()
  @IsOptional()
  archive?: string;
}
