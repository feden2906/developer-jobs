import { IPosition } from '../../interfaces';

export interface IPositionRepository {
  create(applicant: IPosition): Promise<IPosition>;
  find(): Promise<IPosition[]>;
}
