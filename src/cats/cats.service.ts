import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Cat } from './cats.entity';
import { Cats } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  constructor(@InjectRepository(Cat) private userRepo: Repository<Cat>) {}

  create(cat: Cats): Promise<Cats> {
    const newCat = this.userRepo.create(cat);
    return this.userRepo.save(newCat);
  }

  async updateCat(cat: Cats): Promise<Cats> {
    let selectCat = await this.getOneById(cat.id);

    selectCat = cat;

    return this.userRepo.save(selectCat);
  }

  getOneById(id: number): Promise<Cats> {
    return this.userRepo.findOneOrFail(id);
  }

  findAll(): Promise<Cats[]> {
    return this.userRepo.find();
  }

  async deleteCat(cat: Cats): Promise<DeleteResult> {
    return this.userRepo.delete(cat);
  }
}
