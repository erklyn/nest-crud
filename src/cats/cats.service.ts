import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Cat } from './cats.entity';
import { Cats } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  constructor(@InjectRepository(Cat) private userRepo: Repository<Cat>) {}

  create(cat: Cats): Promise<Cats> {
    const newCat = this.userRepo.create(cat);
    return this.userRepo.save(newCat);
  }

  async updateCat(cat: Cats, id: number): Promise<UpdateResult> {
    return this.userRepo.update(id, cat);
  }

  getOneById(id: number): Promise<Cats> {
    return this.userRepo.findOneOrFail(id);
  }

  findAll(): Promise<Cats[]> {
    return this.userRepo.find({
      relations: ['owner'],
    });
  }

  async deleteCat(id: number): Promise<DeleteResult> {
    const cat = await this.getOneById(id);

    return this.userRepo.delete(cat);
  }
}
