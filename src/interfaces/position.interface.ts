import { Document } from 'mongoose';

export interface IPosition extends Document {
  category: string;
  level: string;
  company: string;
  description?: string;
  japaneseRequired: boolean;
}
