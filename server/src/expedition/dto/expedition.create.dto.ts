import { CreateExpedition, ExpeditionName, Role } from '@The-Iron-Marble-Company/model';
import { IsBoolean, IsDateString, IsEnum } from 'class-validator';

export class CreateExpeditionDto implements CreateExpedition {
  @IsDateString()
  beginDateTime: string;

  @IsBoolean()
  hasTuningOrb: boolean;

  @IsBoolean()
  hasMutatedOrb: boolean;

  @IsEnum(ExpeditionName)
  name: ExpeditionName;

  @IsEnum(Role)
  role: Role;
}
