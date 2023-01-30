/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Inject, Injectable } from "@nestjs/common";
import { Model, ObjectId } from "mongoose";
import { CreateAdviceLetterDto } from "./dto/create-advice-letters-dto";
import { UpdateAdviceLetterDto } from "./dto/update-advice-letters-dto";
import { Advice_Letter, Advice_LetterDocument } from "./schemas/advice-letter.schema";
import { InjectModel } from "@nestjs/mongoose";
@Injectable()
export class Advice_Letter_Service {
  // constructor(
  //   @Inject("ADVICE_LETTER_MODEL")
  //   private AdviceLetterModel: Model<Advice_Letter>,
  // ) {}
  constructor(@InjectModel(Advice_Letter.name) private AdviceLetterModel: Model<Advice_LetterDocument>) {}

  async create(createAdviceLetterDto: CreateAdviceLetterDto): Promise<Advice_Letter> {
    const createAdviceLetter = new this.AdviceLetterModel(createAdviceLetterDto);
    return createAdviceLetter.save();
  }
  async show(_id: ObjectId): Promise<Advice_Letter> {
    return this.AdviceLetterModel.findById(_id).exec();
  }
  async showAll(page: number, limit: number): Promise<any> {
    const data = await this.AdviceLetterModel.find()
      .limit(limit)
      .skip(limit * (page - 1))
      .sort({ sendDate: "desc" })
      .exec();
    const count = await this.AdviceLetterModel.find().count();
    return { data: data, total: count };
  }
  async update(_id: ObjectId, updateAdviceLetterDto: UpdateAdviceLetterDto): Promise<Advice_Letter> {
    await this.AdviceLetterModel.findOneAndUpdate(_id, updateAdviceLetterDto).exec();
    return this.AdviceLetterModel.findById(_id).exec();
  }
  async delete(_id: ObjectId): Promise<Advice_Letter> {
    return this.AdviceLetterModel.findOneAndDelete(_id).exec();
  }
  async search(keyWord: any, limit: number, page: number): Promise<any> {
    const data = await this.AdviceLetterModel.find({
      $or: [{ email: { $regex: keyWord, $options: "i" } }, { phoneNumber: { $regex: keyWord, $options: "i" } }],
    })
      .limit(limit)
      .skip(limit * (page - 1))
      .sort({ sendDate: "desc" })
      .exec();

    const count = await this.AdviceLetterModel.find({
      $or: [{ email: { $regex: keyWord, $options: "i" } }, { phoneNumber: { $regex: keyWord, $options: "i" } }],
    }).count();
    return { data: data, total: count };
  }
}
