import { IsBoolean, IsNumber } from 'class-validator';
import { AdminUser } from '@The-Iron-Marble-Company/model';

export class AdminUserDto implements AdminUser {
  @IsNumber()
  userId: number;
  @IsBoolean()
  admin: boolean;
}
