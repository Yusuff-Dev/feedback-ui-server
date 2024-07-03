import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FeedbackModule } from './module/feedback/feedback.module';

@Module({
  imports: [MongooseModule.forRoot("mongodb://localhost:27017/feedback"), FeedbackModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
