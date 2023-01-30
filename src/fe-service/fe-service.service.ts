import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { CreateFeServiceDto } from "./dto/create-fe-services-dto";
import { UpdateFeServiceDto } from "./dto/update-fe-services-dto";
import { Fe_Service, Fe_ServiceDocument } from "./schemas/fe-service.schema";

@Injectable()
export class FeServiceService {
  constructor(@InjectModel(Fe_Service.name) private Fe_ServiceModel: Model<Fe_ServiceDocument>) {}

  async create(createFeServiceDto: CreateFeServiceDto): Promise<Fe_Service> {
    const createFeService = new this.Fe_ServiceModel(createFeServiceDto);
    return createFeService.save();
  }
  async show(_id: ObjectId): Promise<Fe_Service> {
    return this.Fe_ServiceModel.findById(_id).exec();
  }
  async showAll(page: number, limit: number): Promise<any> {
    const data = await this.Fe_ServiceModel.find()
      .limit(limit)
      .skip(limit * (page - 1))
      .sort({ time: "desc" })
      .exec();
    const count = await this.Fe_ServiceModel.find().count();
    return { data: data, total: count };
  }
  async update(_id: ObjectId, updateFeServiceDto: UpdateFeServiceDto): Promise<Fe_Service> {
    await this.Fe_ServiceModel.findOneAndUpdate(_id, updateFeServiceDto).exec();
    return this.Fe_ServiceModel.findById(_id).exec();
  }
  async delete(_id: ObjectId): Promise<Fe_Service> {
    return this.Fe_ServiceModel.findOneAndDelete(_id).exec();
  }
  async search(keyWord: any, limit: number, page: number): Promise<any> {
    const data = await this.Fe_ServiceModel.find({
      $or: [{ name: { $regex: keyWord, $options: "i" } }, { time: { $regex: keyWord, $options: "i" } }],
    })
      .limit(limit)
      .skip(limit * (page - 1))
      .sort({ sendDate: "desc" })
      .exec();

    const count = await this.Fe_ServiceModel.find({
      $or: [{ email: { $regex: keyWord, $options: "i" } }, { phoneNumber: { $regex: keyWord, $options: "i" } }],
    }).count();
    return { data: data, total: count };
  }
}
