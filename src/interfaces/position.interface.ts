import { Document } from 'mongoose';

import { CategoryEnum, FrameworkEnum, SkillLevelEnum } from '../enums';
import { ILanguage } from './language.interface';

export interface IPosition extends Document {
  category: CategoryEnum;
  stack: FrameworkEnum[];
  level: SkillLevelEnum;
  company: string;
  description: string;
  languages: ILanguage[];
}
