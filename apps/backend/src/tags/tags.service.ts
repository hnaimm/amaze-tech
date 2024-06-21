import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TagsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTagDto: CreateTagDto) {
    return this.prisma.prismaClient.tag.create({
      data: createTagDto,
    });
  }

  async findAll() {
    return this.prisma.prismaClient.tag.findMany();
  }

  async remove(id: string) {
    return this.prisma.prismaClient.tag.delete({
      where: { id: parseInt(id) },
    });
  }
}
