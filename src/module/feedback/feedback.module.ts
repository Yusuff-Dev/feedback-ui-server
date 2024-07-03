import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FeedbackService } from './feedback.service';
import { FeedbackController } from './feedback.controller';
import { FeedbackSchema } from 'src/schemas/feedback.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Feedback', schema: FeedbackSchema }])],
  providers: [FeedbackService],
  controllers: [FeedbackController],
})
export class FeedbackModule { }
