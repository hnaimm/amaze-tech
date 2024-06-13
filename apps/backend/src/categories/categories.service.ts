import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCategoryDto: CreateCategoryDto) {
    return this.prisma.prismaClient.category.create({
      data: createCategoryDto,
    });
  }

  async findAll() {
    return this.prisma.prismaClient.category.findMany();
  }

  async findOne(id: string) {
    return this.prisma.prismaClient.category.findUnique({
      where: { id: parseInt(id) },
    });
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return this.prisma.prismaClient.category.update({
      where: { id: parseInt(id) },
      data: updateCategoryDto,
    });
  }

  async remove(id: string) {
    return this.prisma.prismaClient.category.delete({
      where: { id: parseInt(id) },
    });
  }
}
