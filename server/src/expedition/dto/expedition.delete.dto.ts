import { DeleteExpedition } from '@The-Iron-Marble-Company/model';
import { IsNumber } from 'class-validator';

export class DeleteExpeditionDto implements DeleteExpedition {
  @IsNumber()
  id: number;
}
