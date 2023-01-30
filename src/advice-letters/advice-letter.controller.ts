import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from "@nestjs/common";
import { ObjectId } from "mongoose";
import { CreateAdviceLetterDto } from "./dto/create-advice-letters-dto";
import { UpdateAdviceLetterDto } from "./dto/update-advice-letters-dto";

import { Advice_Letter_Service } from "./advice-letter.service";
import { Advice_Letter, Advice_LetterDocument } from "./schemas/advice-letter.schema";

@Controller("advice-letter")
export class Advice_Letter_Controller {
  constructor(private advice_Letter_Service: Advice_Letter_Service) {}
  @Get(":_id")
  showNew(@Param() _id: ObjectId): Promise<Advice_Letter> {
    return this.advice_Letter_Service.show(_id);
  }
  @Get("")
  showAllNews(
    @Query("limit", ParseIntPipe) limit: number,
    @Query("page", ParseIntPipe) page: number,
  ): Promise<Advice_Letter[]> {
    return this.advice_Letter_Service.showAll(page, limit);
  }
  @Get("/search/:keyWord")
  searchUser(
    @Param("keyWord") keyWord: any,
    @Query("limit", ParseIntPipe) limit: number,
    @Query("page", ParseIntPipe) page: number,
  ): Promise<Advice_Letter[]> {
    return this.advice_Letter_Service.search(keyWord, limit, page);
  }
  @Post()
  storeNew(@Body() createAdviceLetterDto: CreateAdviceLetterDto): Promise<Advice_Letter> {
    return this.advice_Letter_Service.create(createAdviceLetterDto);
  }
  @Patch(":_id")
  updateNew(@Param() _id: ObjectId, @Body() updateAdviceLetterDto: UpdateAdviceLetterDto): Promise<Advice_Letter> {
    return this.advice_Letter_Service.update(_id, updateAdviceLetterDto);
  }
  @Delete(":_id")
  deleteNew(@Param() _id: ObjectId): Promise<Advice_Letter> {
    return this.advice_Letter_Service.delete(_id);
  }
}
