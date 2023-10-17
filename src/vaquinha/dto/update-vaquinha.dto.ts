import { PartialType } from '@nestjs/mapped-types';
import { CreateVaquinhaDto } from './create-vaquinha.dto';

export class UpdateVaquinhaDto extends PartialType(CreateVaquinhaDto) {}
