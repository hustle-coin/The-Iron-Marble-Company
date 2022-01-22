import { UserAvatar, UserWithPermissions } from '@The-Iron-Marble-Company/model';
import { Request as ExpressRequest } from 'express';

export enum CookieNames {
  ACCESS_TOKEN = 'access_token',
  DISCORD_TOKEN = 'discord_token',
}

export type Cookies = {
  access_token?: string;
  discord_token?: string;
};

export type AccessToken = {
  id: number;
  discordId: string;
  discordAvatar: string;
};

export type Request = {
  user: UserWithPermissions;
  discordAvatar: string;
} & ExpressRequest;
