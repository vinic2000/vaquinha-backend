import { PartialType } from '@nestjs/mapped-types';
import { CreateVaquinhaDto } from './create-vaquinha.dto';

export class UpdateUserDto extends PartialType(CreateVaquinhaDto) {
  price?: number;
  userAdmin?: string;
  memberCount?: number;
}
