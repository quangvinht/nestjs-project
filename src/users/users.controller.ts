// eslint-disable-next-line prettier/prettier
import { Controller, Get, Post, Req, Param, Delete, Patch, Body, ParseIntPipe, Query } from "@nestjs/common";
import { UserService } from "./users.service";
import { CreateUserDto } from "src/users/dto/create-users.dto";
import { UpdateUserDto } from "src/users/dto/update-users.dto";

import { ObjectId } from "mongoose";
import { User } from "./schemas/users.schema";

@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}

  @Get(":_id")
  showUser(@Param() _id: ObjectId): Promise<User> {
    return this.userService.show(_id);
  }
  @Get("")
  showAllUser(@Query("limit", ParseIntPipe) limit: number, @Query("page", ParseIntPipe) page: number): Promise<User[]> {
    return this.userService.showAll(page, limit);
  }
  @Get("/search/:keyWord")
  searchUser(
    @Param("keyWord") keyWord: any,
    @Query("limit", ParseIntPipe) limit: number,
    @Query("page", ParseIntPipe) page: number,
  ): Promise<User[]> {
    return this.userService.search(keyWord, limit, page);
  }

  @Post()
  storeUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @Patch(":_id")
  updateUser(@Body() updateUserDto: UpdateUserDto, @Param() _id: ObjectId): Promise<User> {
    return this.userService.update(updateUserDto, _id);
  }

  @Delete(":_id")
  deleteUser(@Param() _id: ObjectId): Promise<User> {
    return this.userService.delete(_id);
  }
}
