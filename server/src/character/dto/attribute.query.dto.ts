import { Attribute, AttributeQuery } from '@The-Iron-Marble-Company/model';
import { IsArray, IsNotEmpty } from 'class-validator';

export class AttributeQueryDto implements AttributeQuery {
  @IsArray()
  @IsNotEmpty()
  attributes: Attribute[];
}
