import { Event } from './event.model';

export interface EnableUser {
  userId: number;
  enabled: boolean;
}

export interface CompanyUser {
  userId: number;
  company: boolean;
}
