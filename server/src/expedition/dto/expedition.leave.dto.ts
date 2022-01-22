import { LeaveExpedition } from '@The-Iron-Marble-Company/model';
import { IsNumber } from 'class-validator';

export class LeaveExpeditionDto implements LeaveExpedition {
  @IsNumber()
  id: number;
}
