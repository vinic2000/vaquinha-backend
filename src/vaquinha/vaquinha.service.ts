import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vaquinha } from './schema/vaquinha.schema';

type messageType = {
  message: string;
};

@Injectable()
export class VaquinhaService {
  constructor(
    @InjectModel(Vaquinha.name) private vaquinhaModel: Model<Vaquinha>,
  ) {}

  async create(dados: Vaquinha): Promise<any> {
    const { name, description, totalValue, adms } = dados;

    const data = await this.vaquinhaModel.create({
      name,
      description,
      totalValue,
      adms,
    });

    return data;
  }

  async find(id: string): Promise<Vaquinha> {
    const data = await this.vaquinhaModel.findById(id);

    VaquinhaService.verifyVaquinhaExist(data);

    return data;
  }

  async addMember(id: string, member: string): Promise<messageType> {
    const vaquinha = await this.find(id);

    VaquinhaService.verifyVaquinhaExist(vaquinha);

    if (vaquinha.member.find((v) => v === member)) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Member already added',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    vaquinha.member.push(member);

    await this.vaquinhaModel.findByIdAndUpdate(id, {
      member: vaquinha.member,
    });

    return {
      message: 'Member added',
    };
  }

  async removeMember(id: string, member: string): Promise<messageType> {
    const vaquinha = await this.find(id);

    VaquinhaService.verifyVaquinhaExist(vaquinha);

    const index = vaquinha.member.findIndex((v) => v === member);

    if (index === -1) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: "Member don't exist",
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    vaquinha.member.splice(index, 1);

    await this.vaquinhaModel.findByIdAndUpdate(id, {
      member: vaquinha.member,
    });

    return {
      message: 'Member removed',
    };
  }

  async deleteVaquinha(id: string): Promise<messageType> {
    const data = await this.vaquinhaModel.findById(id);
    VaquinhaService.verifyVaquinhaExist(data);
    await this.vaquinhaModel.findByIdAndDelete(id);
    return { message: 'Vaquinha deleted' };
  }

  private static verifyVaquinhaExist(vaquinha: Vaquinha): void {
    if (!vaquinha) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Vaquinha not found',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
