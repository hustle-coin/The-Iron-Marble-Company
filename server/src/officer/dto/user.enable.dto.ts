import { IsBoolean, IsNumber } from 'class-validator';
import { EnableUser } from '@The-Iron-Marble-Company/model';

export class EnableUserDto implements EnableUser {
  @IsNumber()
  userId: number;
  @IsBoolean()
  enabled: boolean;
}
