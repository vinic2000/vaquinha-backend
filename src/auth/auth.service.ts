import { JwtService } from '@nestjs/jwt';
import { PrismaService } from './../prisma.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Auth } from './entities/auth';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async authenticate({ email, password: pass }: Auth) {

    if(email === undefined && pass === undefined){
      throw new UnauthorizedException('E-mail or password invalid');
    }

    const user = await this.prisma.user.findFirst({
      where: {
        email: email,
        password: pass,
      },
    });

    if (!user) {
      throw new UnauthorizedException('E-mail or password invalid');
    }

    const { password, ...rest } = user;

    return {
      ...rest,
      token: this.jwtService.sign(rest),
    };
  }
}
