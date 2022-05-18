import { Document } from 'mongoose';

export interface IApplicant extends Document {
  email: string;
  categories: string[];
  japaneseKnowledge: boolean;
  level: string;
}
