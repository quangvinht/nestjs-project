import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from "@nestjs/common";
import { ObjectId } from "mongoose";
import { CreateRecruitDto } from "./dto/create-recruitment.dto";
import { UpdateRecruitDto } from "./dto/update-recruitment.dto";

import { RecruitmentService } from "./recruitment.service";
import { Recruit } from "./schemas/recruitment.schema";

@Controller("recruitment")
export class RecruitmentController {
  constructor(private recruitmentService: RecruitmentService) {}

  @Get(":_id")
  showRecruit(@Param() _id: ObjectId): Promise<Recruit> {
    return this.recruitmentService.show(_id);
  }
  @Get("")
  showAllUser(
    @Query("limit", ParseIntPipe) limit: number,
    @Query("page", ParseIntPipe) page: number,
  ): Promise<Recruit[]> {
    return this.recruitmentService.showAll(page, limit);
  }
  @Get("/search/:keyWord")
  searchUser(
    @Param("keyWord") keyWord: any,
    @Query("limit", ParseIntPipe) limit: number,
    @Query("page", ParseIntPipe) page: number,
  ): Promise<Recruit[]> {
    return this.recruitmentService.search(keyWord, limit, page);
  }

  @Post()
  storeUser(@Body() createRecruitDto: CreateRecruitDto): Promise<Recruit> {
    return this.recruitmentService.create(createRecruitDto);
  }

  @Patch(":_id")
  updateUser(@Body() updateRecruitDto: UpdateRecruitDto, @Param() _id: ObjectId): Promise<Recruit> {
    return this.recruitmentService.update(updateRecruitDto, _id);
  }

  @Delete(":_id")
  deleteUser(@Param() _id: ObjectId): Promise<Recruit> {
    return this.recruitmentService.delete(_id);
  }
}
