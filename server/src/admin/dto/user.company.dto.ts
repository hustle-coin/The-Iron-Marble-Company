import { IsBoolean, IsNumber } from 'class-validator';
import { CompanyUser } from '@The-Iron-Marble-Company/model';

export class CompanyUserDto implements CompanyUser {
  @IsNumber()
  userId: number;
  @IsBoolean()
  company: boolean;
}
