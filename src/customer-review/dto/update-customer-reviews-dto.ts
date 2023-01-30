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

export class UpdateCustomerReviewDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  review?: string;
}
