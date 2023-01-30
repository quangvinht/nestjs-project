/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Inject, Injectable, ParseIntPipe } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { UserService } from "src/users/users.service";
import { CreateNewDto } from "./dto/create-news-dto";
import { UpdateNewDto } from "./dto/update-news-dto";
import { News, NewsDocument } from "./schemas/news.schema";

@Injectable()
export class NewsService {
  // constructor(
  //   @Inject("NEW_MODEL")
  //   private NewModel: Model<News>,
  //   private userService: UserService,
  // ) {}
  constructor(@InjectModel(News.name) private NewModel: Model<NewsDocument>) {}

  async create(createNewDto: CreateNewDto): Promise<News> {
    const createNew = new this.NewModel(createNewDto);
    return createNew.save();
  }
  async show(_id: ObjectId): Promise<News | any> {
    return this.NewModel.findById(_id).populate("users").exec();
    //return this.NewModel.findById(_id).populate("users").exec();
  }
  async showAll(page: number, limit: number): Promise<any> {
    const data = await this.NewModel.find()
      .limit(limit)
      .skip(limit * (page - 1))
      .sort({ postDate: "desc" })
      .exec();
    const count = await this.NewModel.count();
    return { data: data, total: count };
    //return this.NewModel.find().populate("users").exec();
  }
  // async paginate(options: IPaginationOptions): Promise<Pagination<News>> {
  //   const qb = this.NewModel.createQueryBuilder("q");
  //   return paginate<News>(qb, options);
  // }
  async update(_id: ObjectId, updateNewDto: UpdateNewDto): Promise<News> {
    await this.NewModel.findOneAndUpdate(_id, updateNewDto).exec();
    return this.NewModel.findById(_id).exec();
  }
  async delete(_id: ObjectId): Promise<News> {
    return this.NewModel.findOneAndDelete(_id).exec();
  }
  async search(keyWord: any, limit: number, page: number): Promise<any> {
    const data = await this.NewModel.find({
      $or: [
        { title: { $regex: keyWord, $options: "i" } },
        // { phoneNumber: { $regex: keyWord, $options: "i" } },
      ],
    })
      .limit(limit)
      .skip(limit * (page - 1))
      .sort({ postDate: "desc" })
      .exec();
    const count = await this.NewModel.find({
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
