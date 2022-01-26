import { IsBoolean, IsNumber } from 'class-validator';
import { OfficerUser } from '@The-Iron-Marble-Company/model';

export class OfficerUserDto implements OfficerUser {
  @IsNumber()
  userId: number;
  @IsBoolean()
  officer: boolean;
}
