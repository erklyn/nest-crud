import { Controller, Get, Param, Post, Res } from '@nestjs/common';
import { response } from 'express';

@Controller('cats')
export class CatsController {
  @Post()
  create(): string {
    return 'mock';
  }
  @Get()
  findAll(): string {
    return 'There is no cats sorry :(';
  }
  @Get(':id')
  findOne(@Param('id') id: string): string {
    console.log(id);
    return `Return the info of the ${id}. Cat`;
  }
}
