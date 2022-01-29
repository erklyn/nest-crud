import { Controller, Get, Param, Post, Body, Patch } from '@nestjs/common';
import { ValidationPipe } from '../common/pipes/validation.pipe';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dtos/create-cat.dto';
import { Cats } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}
  @Post()
  async create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
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
  @Patch()
  updateOne(cat: Cats): Promise<Cats> {
    return this.catsService.updateCat(cat);
  }
}
