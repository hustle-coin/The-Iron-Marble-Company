import { Event } from './event.model';

export type Version = {
  version: string;
};

export interface AdminUser {
  userId: number;
  admin: boolean;
}

export interface EnableUser {
  userId: number;
  enabled: boolean;
}

export interface CompanyUser {
  userId: number;
  company: boolean;
}

export interface OfficerUser {
  userId: number;
  officer: boolean;
}

export interface DeleteUser {
  userId: number;
}

export class ServerRestartEvent implements Event {
  id = 'SERVER.RESTART';
}

export class ServerUpdateEvent implements Event {
  id = 'SERVER.UPDATED';
  constructor(public message: string) {}
}
