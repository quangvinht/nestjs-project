/* eslint-disable prettier/prettier */
import { Inject, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { UserService } from "src/users/users.service";
import { CreateRecruitDto } from "./dto/create-recruitment.dto";
import { UpdateRecruitDto } from "./dto/update-recruitment.dto";

import { Recruit, RecruitDocument } from "./schemas/recruitment.schema";

@Injectable()
export class RecruitmentService {
  // constructor(
  //   @Inject("RECRUIT_MODEL")
  //   private RecruitModel: Model<Recruit>,
  //   private userService: UserService,
  // ) {}

  constructor(@InjectModel(Recruit.name) private RecruitModel: Model<RecruitDocument>) {}

  async create(createRecruitDto: CreateRecruitDto): Promise<Recruit> {
    const createRecruit = new this.RecruitModel(createRecruitDto);
    return createRecruit.save();
  }
  async show(_id: ObjectId): Promise<any | Recruit> {
    return this.RecruitModel.findById(_id).populate("users").exec();
    //return this.RecruitModel.findById(_id).populate("users").exec();
  }
  async showAll(page: number, limit: number): Promise<any> {
    const data = await this.RecruitModel.find()
      .limit(limit)
      .skip(limit * (page - 1))
      .sort({ postDate: "desc" })
      .exec();
    const count = await this.RecruitModel.count();
    return { data: data, total: count };
    //return this.RecruitModel.find().populate("users").exec();
  }

  async update(updateRecruitDto: UpdateRecruitDto, _id: ObjectId): Promise<Recruit> {
    //const checkUserId = this.RecruitModel.findById(_id);

    // if (checkUserId) {
    // if (updateUserDto.name.firstName && updateUserDto.name.lastName) {
    //   this.RecruitModel.findOneAndUpdate(_id, {
    //     "name.firstName": updateUserDto.name.firstName,
    //     "name.lastName": updateUserDto.name.lastName,
    //   }).exec();
    // }
    // if (updateUserDto.email !== "") {
    //   this.RecruitModel.findOneAndUpdate(_id, {
    //     email: updateUserDto.email,
    //   }).exec();
    // }
    // if (updateUserDto.phone) {
    //   this.RecruitModel.findOneAndUpdate(_id, {
    //     phone: updateUserDto.phone,
    //   }).exec();
    // }
    // if (updateUserDto.password) {
    //   this.RecruitModel.findOneAndUpdate(_id, {
    //     password: updateUserDto.password,
    //   }).exec();
    // }
    //return this.RecruitModel.findById(_id).exec();
    // }

    await this.RecruitModel.findOneAndUpdate(_id, updateRecruitDto).exec();
    return this.RecruitModel.findById(_id).exec();
  }
  async delete(_id: ObjectId): Promise<Recruit> {
    return this.RecruitModel.findOneAndDelete(_id).exec();
  }

  async search(keyWord: any, limit: number, page: number): Promise<any> {
    const data = await this.RecruitModel.find({
      $or: [
        { title: { $regex: keyWord, $options: "i" } },
        // { phoneNumber: { $regex: keyWord, $options: "i" } },
      ],
    })
      .limit(limit)
      .skip(limit * (page - 1))
      .sort({ postDate: "desc" })
      .exec();
    const count = await this.RecruitModel.find({
      $or: [
        { title: { $regex: keyWord, $options: "i" } },
        // { phoneNumber: { $regex: keyWord, $options: "i" } },
      ],
    })
      .count()
      .exec();
    return { data: data, total: count };
  }
}
