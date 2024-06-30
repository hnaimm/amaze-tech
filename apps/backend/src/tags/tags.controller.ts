import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { TagsService } from './tags.service';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Get()
  getTags() {
    return this.tagsService.findAll();
  }

  @Post()
  createTag(@Body(new ValidationPipe()) createTagDto: CreateTagDto) {
    return this.tagsService.create(createTagDto);
  }

  @Delete(':id')
  deleteTag(@Param('id') id: string) {
    return this.tagsService.remove(id);
  }
}
