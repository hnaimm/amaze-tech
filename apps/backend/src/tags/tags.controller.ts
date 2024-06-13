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
import { UpdateTagDto } from './dto/update-tag.dto';
import { TagsService } from './tags.service';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Get()
  getTags() {
    return this.tagsService.findAll();
  }

  @Get(':id')
  getTagById(@Param('id') id: string) {
    return this.tagsService.findOne(id);
  }

  @Post()
  createTag(@Body(new ValidationPipe()) createTagDto: CreateTagDto) {
    return this.tagsService.create(createTagDto);
  }

  @Put(':id')
  updateTag(@Param('id') id: string, @Body() updateTagDto: UpdateTagDto) {
    return this.tagsService.update(id, updateTagDto);
  }

  @Delete(':id')
  deleteTag(@Param('id') id: string) {
    return this.tagsService.remove(id);
  }
}
