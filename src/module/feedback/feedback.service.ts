import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Feedback } from './interfaces/feedback.interface';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';

@Injectable()
export class FeedbackService {
  constructor(@InjectModel('Feedback') private readonly feedbackModel: Model<Feedback>) { }

  async create(createFeedbackDto: CreateFeedbackDto): Promise<Feedback> {
    const createdFeedback = new this.feedbackModel(createFeedbackDto);
    return createdFeedback.save();
  }

  async findAll(): Promise<Feedback[]> {
    return this.feedbackModel.find().exec();
  }

  async findOne(id: string): Promise<Feedback> {
    return this.feedbackModel.findById(id).exec();
  }

  async update(id: string, updateFeedbackDto: UpdateFeedbackDto): Promise<Feedback> {
    return this.feedbackModel.findByIdAndUpdate(id, updateFeedbackDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Feedback> {
    return this.feedbackModel.findByIdAndDelete(id).exec();
  }
}
