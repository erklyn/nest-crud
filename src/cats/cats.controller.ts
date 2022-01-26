import { Controller, Get, Param, Post, Body, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }
  @Get()
  findAll(@Res() res: Response) {
    res.status(200).json(['Cat1', 'Cat2']).end();
  }
  @Get(':id')
  findOne(@Param('id') id: string): string {
    console.log(id);
    return `Return the info of the ${id}. Cat`;
  }
}
