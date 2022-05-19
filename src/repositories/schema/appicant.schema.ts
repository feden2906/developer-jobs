import { Schema } from 'mongoose';

import {
  CategoryEnum,
  FrameworkEnum,
  LanguageEnum,
  LanguageLevelEnum,
  ProgrammingLanguageEnum,
  SkillLevelEnum,
} from '../../enums';

export const ApplicantSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    category: {
      enum: CategoryEnum,
      required: true,
      type: String,
    },
    email: {
      required: true,
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
    mainStack: {
      required: true,
      type: [{ enum: FrameworkEnum, type: String }],
    },
    name: {
      required: true,
      type: String,
    },
    passwordHash: {
      required: true,
      type: String,
    },
    programmingLanguages: {
      required: true,
      type: [{ enum: ProgrammingLanguageEnum, type: String }],
    },
  },
  { versionKey: false },
);
