import { Document } from 'mongoose';

import {
  CategoryEnum,
  FrameworkEnum,
  ProgrammingLanguageEnum,
  SkillLevelEnum,
} from '../enums';
import { ILanguage } from './language.interface';

export interface IApplicant extends Document {
  name: string;
  passwordHash: string;
  email: string;
  programmingLanguages: ProgrammingLanguageEnum[];
  mainStack: FrameworkEnum[];
  level: SkillLevelEnum;
  languages: ILanguage[];
  category: CategoryEnum;
}
