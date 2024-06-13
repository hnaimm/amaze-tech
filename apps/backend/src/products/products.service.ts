import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    return this.prisma.prismaClient.product.create({
      // TODO: data type
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      data: createProductDto,
    });
  }

  async findAll() {
    return this.prisma.prismaClient.product.findMany();
  }

  async findOne(id: string) {
    return this.prisma.prismaClient.product.findUnique({
      where: { id: parseInt(id) },
    });
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    return this.prisma.prismaClient.product.update({
      where: { id: parseInt(id) },
      // TODO: data type
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      data: updateProductDto,
    });
  }

  async remove(id: string) {
    return this.prisma.prismaClient.product.delete({
      where: { id: parseInt(id) },
    });
  }
}
