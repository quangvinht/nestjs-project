import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from "@nestjs/common";
import { ObjectId } from "mongoose";
import { CreateFeServiceDto } from "./dto/create-fe-services-dto";
import { UpdateFeServiceDto } from "./dto/update-fe-services-dto";
import { FeServiceService } from "./fe-service.service";
import { Fe_Service } from "./schemas/fe-service.schema";

@Controller("fe-service")
export class FeServiceController {
  constructor(private fe_Service: FeServiceService) {}
  @Get(":_id")
  showNew(@Param() _id: ObjectId): Promise<Fe_Service> {
    return this.fe_Service.show(_id);
  }
  @Get("")
  showAllNews(
    @Query("limit", ParseIntPipe) limit: number,
    @Query("page", ParseIntPipe) page: number,
  ): Promise<Fe_Service[]> {
    return this.fe_Service.showAll(page, limit);
  }
  @Get("/search/:keyWord")
  searchUser(
    @Param("keyWord") keyWord: any,
    @Query("limit", ParseIntPipe) limit: number,
    @Query("page", ParseIntPipe) page: number,
  ): Promise<Fe_Service[]> {
    return this.fe_Service.search(keyWord, limit, page);
  }
  @Post()
  storeNew(@Body() createFeServiceDto: CreateFeServiceDto): Promise<Fe_Service> {
    return this.fe_Service.create(createFeServiceDto);
  }
  @Patch(":_id")
  updateNew(@Param() _id: ObjectId, @Body() updateFeServiceDto: UpdateFeServiceDto): Promise<Fe_Service> {
    return this.fe_Service.update(_id, updateFeServiceDto);
  }
  @Delete(":_id")
  deleteNew(@Param() _id: ObjectId): Promise<Fe_Service> {
    return this.fe_Service.delete(_id);
  }
}
