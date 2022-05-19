import { Schema } from 'mongoose';

import {
  CategoryEnum,
  FrameworkEnum,
  LanguageEnum,
  LanguageLevelEnum,
  SkillLevelEnum,
} from '../../enums';

export const PositionSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    category: {
      enum: CategoryEnum,
      required: true,
      type: String,
    },
    company: {
      required: true,
      type: String,
    },
    description: {
      required: false,
      type: String,
    },
    languages: {
      required: true,
      type: [
        {
          language: { enum: LanguageEnum, type: String },
          level: { enum: LanguageLevelEnum, type: String },
        },
      ],
    },
    level: {
      enum: SkillLevelEnum,
      required: true,
      type: String,
    },
    stack: [
      {
        enum: FrameworkEnum,
        required: true,
        type: String,
      },
    ],
  },
  { versionKey: false },
);
