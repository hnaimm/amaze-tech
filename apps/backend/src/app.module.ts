import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { PrismaModule } from './prisma/prisma.module';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [PrismaModule, TagsModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
