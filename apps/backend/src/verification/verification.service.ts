import { Injectable } from '@nestjs/common';
import { AddVerificationDto } from './dto/add-verification.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VerificationService {
  constructor(private readonly prisma: PrismaService) {}

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
}
