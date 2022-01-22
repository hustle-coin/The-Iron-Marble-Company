import { DeleteUser } from '@The-Iron-Marble-Company/model';
import { IsNumber } from 'class-validator';

export class DeleteUserDto implements DeleteUser {
  @IsNumber()
  userId: number;
}
