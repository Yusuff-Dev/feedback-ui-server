import { Controller, Get, Post, Put, Delete, Body, Param, UsePipes, ValidationPipe, NotFoundException } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';
import { Feedback } from './interfaces/feedback.interface';

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) { }

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async create(@Body() createFeedbackDto: CreateFeedbackDto): Promise<Feedback> {
    return this.feedbackService.create(createFeedbackDto);
  }

  @Get()
  async findAll() {
    return this.feedbackService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Feedback> {
    const feedback = await this.feedbackService.findOne(id);
    if (!feedback) {
      throw new NotFoundException(`Feedback with ID ${id} not found`);
    }
    return feedback;
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async update(@Param('id') id: string, @Body() updateFeedbackDto: UpdateFeedbackDto): Promise<Feedback> {
    const updatedFeedback = await this.feedbackService.update(id, updateFeedbackDto);
    if (!updatedFeedback) {
      throw new NotFoundException(`Feedback with ID ${id} not found`);
    }
    return updatedFeedback;
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Feedback> {
    const deletedFeedback = await this.feedbackService.remove(id);
    if (!deletedFeedback) {
      throw new NotFoundException(`Feedback with ID ${id} not found`);
    }
    return deletedFeedback;
  }
}
