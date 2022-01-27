import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dtos/create-cat.dto';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }
  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string): string {
    console.log(id);
    return `Return the info of the ${id}. Cat`;
  }
}
