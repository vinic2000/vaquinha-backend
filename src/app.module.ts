import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { VaquinhaModule } from './vaquinha/vaquinha.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot('mongodb://localhost/vaquinha'),
    VaquinhaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
