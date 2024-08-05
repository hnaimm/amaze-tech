import { Injectable, UnauthorizedException } from '@nestjs/common';
const jwt = require('jsonwebtoken');
import { AddVerificationDto } from './dto/add-verification.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { jwtConstants } from 'src/auth/constants/jwtConstants';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { VerifyEmailDto } from './dto/verify-email.dto copy';

@Injectable()
export class VerificationService {
  constructor(
    private usersService: UsersService,
    private readonly prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async findAll() {
    return this.prisma.prismaClient.verification.findMany();
  }

  async findOne(email: string) {
    return this.prisma.prismaClient.verification.findUnique({
      where: { email },
    });
  }

  async create(addVerificationDto: AddVerificationDto) {
    return this.prisma.prismaClient.verification.create({
      data: addVerificationDto,
    });
  }

  async remove(email: string) {
    return this.prisma.prismaClient.verification.delete({
      where: { email },
    });
  }

  async verifyEmail(verifyEmailDto: VerifyEmailDto) {
    const { code } = verifyEmailDto;

    const verificationRecord =
      await this.prisma.prismaClient.verification.findUnique({
        where: { code: code },
      });

    if (!verificationRecord) {
      throw new UnauthorizedException();
    }

    // Log user in
    const response = await jwt.verify(
      verificationRecord.code,
      jwtConstants.secret,
      async (err) => {
        if (err) {
          throw new UnauthorizedException();
        }

        // If Code is verified

        // 1- delete it from veritification table
        await this.remove(verificationRecord.email);

        // 2- set is_verified=true for user
        const user = await this.usersService.findOne(verificationRecord.email);
        const updatedUser = await this.usersService.update(user.email, {
          ...user,
          is_verified: true,
        });

        //Generate JWT
        const payload = { sub: user.id, email: user.email };
        const response = {
          access_token: await this.jwtService.signAsync(payload),
          user: updatedUser,
        };

        return response;
      },
    );

    return response;
  }
}
