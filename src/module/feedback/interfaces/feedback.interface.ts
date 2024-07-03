import { Document } from 'mongoose';

export interface Feedback extends Document {
  readonly text: string;
  readonly rating: number;
}
