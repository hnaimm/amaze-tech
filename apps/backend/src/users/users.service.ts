import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    return this.prisma.prismaClient.user.create({
      data: createUserDto,
    });
  }

  async findAll() {
    return this.prisma.prismaClient.user.findMany();
  }

  async findOne(id: string) {
    return this.prisma.prismaClient.user.findUnique({
      where: { id: parseInt(id) },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return this.prisma.prismaClient.user.update({
      where: { id: parseInt(id) },
      data: updateUserDto,
    });
  }

  async remove(id: string) {
    return this.prisma.prismaClient.user.delete({
      where: { id: parseInt(id) },
    });
  }
}
