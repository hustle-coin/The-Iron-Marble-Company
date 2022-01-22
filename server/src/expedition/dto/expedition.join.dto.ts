import { JoinExpedition, Role } from '@The-Iron-Marble-Company/model';
import { IsBoolean, IsEnum, IsNumber } from 'class-validator';

export class JoinExpeditionDto implements JoinExpedition {
  @IsBoolean()
  hasTuningOrb: boolean;
  @IsNumber()
  id: number;
  @IsEnum(Role)
  role: Role;
}
