import { Attribute, AttributeUpdate } from '@The-Iron-Marble-Company/model';
import { IsAlphanumeric, IsEnum, IsString } from 'class-validator';

export class AttributeUpdateDto implements AttributeUpdate {
  @IsEnum(Attribute)
  attribute: Attribute;

  @IsString()
  @IsAlphanumeric()
  value: string;
}
