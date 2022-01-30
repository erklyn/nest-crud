import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
import { ValidationPipe } from '../common/pipes/validation.pipe';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dtos/create-cat.dto';
import { Cats } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}
  @Post()
  async create(
    @Body(new ValidationPipe()) createCatDto: CreateCatDto,
  ): Promise<Cats> {
    return this.catsService.create(createCatDto);
  }
  @Get()
  async findAll(): Promise<Cats[]> {
    return this.catsService.findAll();
  }
  @Get(':id')
  findOne(
    @Param('id')
    id: number,
  ): Promise<Cats> {
    return this.catsService.getOneById(id);
  }
  @Patch(':id')
  updateOne(@Body() cat: Cats, @Param('id') id: number): Promise<UpdateResult> {
    return this.catsService.updateCat(cat, id);
  }

  @Delete(':id')
  deleteOne(
    @Param('id')
    id: number,
  ): Promise<DeleteResult> {
    return this.catsService.deleteCat(id);
  }
}
