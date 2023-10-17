import { Module } from '@nestjs/common';
import { VaquinhaService } from './vaquinha.service';
import { VaquinhaController } from './vaquinha.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Vaquinha, vaquinhaSchema } from './schema/vaquinha.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Vaquinha.name, schema: vaquinhaSchema },
    ]),
  ],
  controllers: [VaquinhaController],
  providers: [VaquinhaService],
})
export class VaquinhaModule {}
