import { IApplicant } from '../../interfaces';

export interface IApplicantRepository {
  create(applicant: IApplicant): Promise<IApplicant>;
  find(): Promise<IApplicant[]>;
}
