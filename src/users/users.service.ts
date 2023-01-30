/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
import { Inject, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { CreateUserDto } from "src/users/dto/create-users.dto";
import { UpdateUserDto } from "src/users/dto/update-users.dto";

import { User, UserDocument } from "./schemas/users.schema";
// import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserService {
  // constructor(
  //   @Inject("USER_MODEL")
  //   private UserModel: Model<User>,
  // ) { }
  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createUser = new this.UserModel(createUserDto);

    return createUser.save();
  }
  async show(_id: ObjectId): Promise<User> {
    // return this.UserModel.findById(_id).populate("recruits").populate("news").exec();
    return this.UserModel.findById(_id).exec();
  }
  async showAll(page: number, limit: number): Promise<any> {
    //return this.UserModel.find().populate("recruits").populate("news").exec();
    const data = await this.UserModel.find()
      .limit(limit)
      .skip(limit * (page - 1))
      .sort({ workDate: "desc" })

      .exec();
    const count = await this.UserModel.find().count();
    return { data: data, total: count };
  }

  async update(updateUserDto: UpdateUserDto, _id: ObjectId): Promise<User> {
    //const checkUserId = this.UserModel.findById(_id);

    // if (checkUserId) {
    // if (updateUserDto.name.firstName && updateUserDto.name.lastName) {
    //   this.UserModel.findOneAndUpdate(_id, {
    //     "name.firstName": updateUserDto.name.firstName,
    //     "name.lastName": updateUserDto.name.lastName,
    //   }).exec();
    // }
    // if (updateUserDto.email !== "") {
    //   this.UserModel.findOneAndUpdate(_id, {
    //     email: updateUserDto.email,
    //   }).exec();
    // }
    // if (updateUserDto.phone) {
    //   this.UserModel.findOneAndUpdate(_id, {
    //     phone: updateUserDto.phone,
    //   }).exec();
    // }
    // if (updateUserDto.password) {
    //   this.UserModel.findOneAndUpdate(_id, {
    //     password: updateUserDto.password,
    //   }).exec();
    // }
    //return this.UserModel.findById(_id).exec();
    // }

    await this.UserModel.findOneAndUpdate(_id, updateUserDto).exec();

    return this.UserModel.findById(_id).exec();
  }
  async delete(_id: ObjectId): Promise<User> {
    return this.UserModel.findOneAndDelete(_id).exec();
  }
  async findByEmail(email: string): Promise<User> {
    return this.UserModel.findOne({ email });
  }

  async findByAccountName(accountName: string): Promise<User> {
    return this.UserModel.findOne({ accountName });
  }

  async search(keyWord: any, limit: number, page: number): Promise<any> {
    const data = await this.UserModel.find({
      $or: [
        { email: { $regex: keyWord, $options: "i" } },
        { phoneNumber: { $regex: keyWord, $options: "i" } },
        { userName: { $regex: keyWord, $options: "i" } },
        { accountName: { $regex: keyWord, $options: "i" } },
        { identifyCard: { $regex: keyWord, $options: "i" } },
      ],
    })
      .limit(limit)
      .skip(limit * (page - 1))
      .sort({ workDate: "desc" })
      .exec();

    const count = await this.UserModel.find({
      $or: [
        { email: { $regex: keyWord, $options: "i" } },
        { phoneNumber: { $regex: keyWord, $options: "i" } },
        { userName: { $regex: keyWord, $options: "i" } },
        { accountName: { $regex: keyWord, $options: "i" } },
        { identifyCard: { $regex: keyWord, $options: "i" } },
      ],
    })
      .count()
      .exec();

    return { data: data, total: count };
  }
}
