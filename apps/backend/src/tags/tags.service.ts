import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
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

  async findOne(id: number) {
    return this.prisma.prismaClient.tag.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateTagDto: UpdateTagDto) {
    return this.prisma.prismaClient.tag.update({
      where: { id },
      data: updateTagDto,
    });
  }

  async remove(id: number) {
    return this.prisma.prismaClient.tag.delete({
      where: { id },
    });
  }
}
