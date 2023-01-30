/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from "@nestjs/common";
import { ObjectId } from "mongoose";
import { UserService } from "src/users/users.service";
import { CreateNewDto } from "./dto/create-news-dto";
import { UpdateNewDto } from "./dto/update-news-dto";
import { News, NewsDocument } from "./schemas/news.schema";

import { NewsService } from "./news.service";

@Controller("news")
export class NewsController {
  constructor(private newsService: NewsService) {}
  @Get(":_id")
  showNew(@Param() _id: ObjectId): Promise<News> {
    return this.newsService.show(_id);
  }
  @Get("")
  showAllNews(@Query("limit", ParseIntPipe) limit: number, @Query("page", ParseIntPipe) page: number): Promise<News[]> {
    return this.newsService.showAll(page, limit);
  }
  @Get("/search/:keyWord")
  searchUser(
    @Param("keyWord") keyWord: any,
    @Query("limit", ParseIntPipe) limit: number,
    @Query("page", ParseIntPipe) page: number,
  ): Promise<News[]> {
    return this.newsService.search(keyWord, limit, page);
  }
  @Post()
  storeNew(@Body() creteNewDto: CreateNewDto): Promise<News> {
    return this.newsService.create(creteNewDto);
  }
  @Patch(":_id")
  updateNew(@Param() _id: ObjectId, @Body() updateNewDto: UpdateNewDto): Promise<News> {
    return this.newsService.update(_id, updateNewDto);
  }
  @Delete(":_id")
  deleteNew(@Param() _id: ObjectId): Promise<News> {
    return this.newsService.delete(_id);
  }
}
