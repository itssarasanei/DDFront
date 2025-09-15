import { DoctorType } from '@/api/methods/models';

export type DoctorProps = {
  doctor: DoctorType;
  professionId?: number;
  hasActions?: boolean;
};
