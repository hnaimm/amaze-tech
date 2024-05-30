import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Products } from './entities/products.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private readonly producstRepository: Repository<Products>,
  ) {}

  create(createProductDto: CreateProductDto) {
    return this.producstRepository.create(createProductDto);
  }

  findAll() {
    return this.producstRepository.find();
  }

  findOne(id: number) {
    return this.producstRepository.findOneBy({ id });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.producstRepository.update(id, updateProductDto);
  }

  remove(id: number) {
    return this.producstRepository.delete(id);
  }
}
