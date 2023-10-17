import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/users.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private UserModel: Model<User>) {}

  async create(props: User) {
    try {
      const data = await this.UserModel.create(props);
      return data;
    } catch (error) {
      console.log('Erro ao salvar dados');
    }
  }

  async findById(id: string) {
    try {
      const data = await this.UserModel.findById(id);
      return data;
    } catch (error) {
      console.log(error);
      console.log('Erro ao salvar dados');
    }
  }
}
