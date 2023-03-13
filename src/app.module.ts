import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { VaquinhasModule } from './vaquinhas/vaquinhas.module';

@Module({
  imports: [UsersModule, AuthModule, VaquinhasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
