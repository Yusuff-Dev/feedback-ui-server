import { Schema } from 'mongoose';

export const FeedbackSchema = new Schema({
  text: { type: String, required: true },
  rating: { type: Number, required: true },
});
