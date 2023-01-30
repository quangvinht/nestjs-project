/* eslint-disable prettier/prettier */

import {
  IsBooleanString,
  IsDate,
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsObject,
  IsOptional,
  IsString,
  Max,
  Min,
} from "class-validator";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  userName: string;

  @IsNotEmpty()
  @IsNumberString()
  identifyCard: string;

  @IsDateString()
  birthDate: string;

  @IsNumberString()
  @IsNotEmpty()
  phoneNumber: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  accountName: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsDateString()
  @IsOptional()
  workDate: string = new Date().toISOString();

  @IsString()
  @IsOptional()
  position = "Nhân viên";

  @IsNumberString()
  @IsOptional()
  salary = "0";

  @IsBooleanString()
  @IsOptional()
  status = "true";

  @IsDateString()
  @IsOptional()
  lastSignupDate: string = new Date().toISOString();

  @IsString()
  avatarUrl: string;

  @IsString()
  @IsOptional()
  archive?: string;
}
