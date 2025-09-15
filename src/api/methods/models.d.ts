import { HttpStatusCode } from 'axios';

export interface RegisterApiData {
  username: string;
  password: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  gender: boolean;
  isDoctor: boolean;
}

export interface RegisterApiResponse {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: boolean;
  nationalId: string | null;
  isDoctor: boolean | null;
  address: string | null;
  params: null;
  roles: [];
  createdAt: string | null;
  updatedAt: string | null;
  deletedAt: string | null;
  enabled: boolean;
  authorities: [];
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  credentialsNonExpired: boolean;
}

export interface LoginApiData {
  username: string;
  password: string;
}

export interface LoginApiResponse {
  token: string;
  expiresIn: number;
}

export interface User {
  sub: string;
  iat: number;
  exp: number;
}

export interface Error {
  type: string;
  title: string;
  status: HttpStatusCode;
  detail: string;
  instance: string;
}

export interface GetDoctorsByProfessionIdApiResponse {
  doctors: DoctorType[];
  professional: Professional;
}

export interface DoctorType {
  id: number;
  userId: number;
  professionalId: number;
  title: string;
  visitFee: number;
  companyPercent: number;
  city: string;
  isSettled: boolean;
  visitRules: string;
  officePhoneNumber: string;
  officeAddress: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface Professional {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export type GetProfessionApiResponse = Professional[];

export interface SetDoctorRateApiBody {
  doctorId: number;
  userId: number;
  comment: string;
  score: number;
}

export type SetDoctorRateApiResponse = Rate;

export interface GetDoctorRatesApiResponse {
  rates: Rate[];
  averageScore: number;
}

export interface Rate {
  id: number;
  doctorId: number;
  userId: number;
  comment: string;
  score: number;
  createdAt: null;
}

export type GetDoctorSchedulesQuery = Partial<{
  from: string;
}>;

export type GetDoctorSchedulesResponse = ScheduleType[];

export type DeleteDoctorScheduleApiBody = number[];

export interface ScheduleType {
  id: number;
  doctorId: number;
  customerId: null;
  startedAt: string;
  endAt: string;
  duration: number;
  isFree: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: null;
}

export type GetScheduleApiResponse = ScheduleType;

export type AssignScheduleToCustomerApiResponse = ScheduleType[];

export interface UserCompleteInfo {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: boolean;
  nationalId: string | null;
  isDoctor: boolean | null;
  address: string | null;
  params: null;
  roles: any[];
  createdAt: string | null;
  updatedAt: string | null;
  deletedAt: string | null;
  enabled: boolean;
  authorities: any[];
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  credentialsNonExpired: boolean;
}

export type GetUserInfoApiResponse = UserCompleteInfo;

export interface CreateVisitApiBody {
  doctorId: number;
  startedAt: string;
  endAt: string;
  duration: number;
}

export interface CreateVisitApiResponse {}

export interface GetCustomerVisitsResponse {
  lastVisits: Visit[];
  onGoingVisits: Visit[];
}

export interface Visit {
  id: number;
  doctorId: number;
  doctorTitle: string;
  professional: string;
  customerId: number;
  startedAt: Date;
  endAt: Date;
  duration: number;
  isFree: boolean;
  createdAt: null;
  price: number;
}

export type UpdateUserInfoBody = {
  username: string;
  firstName: string;
  lastName: string;
  nationalId: string;
  gender: boolean;
  address: string;
};

export type UpdateUserInfoResponse = {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: boolean;
  nationalId: null;
  isDoctor: null;
  address: string;
  params: null;
  roles: any[];
  createdAt: null;
  updatedAt: null;
  deletedAt: null;
  enabled: boolean;
  authorities: any[];
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  credentialsNonExpired: boolean;
};
