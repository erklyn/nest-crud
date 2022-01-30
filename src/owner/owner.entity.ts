import { Cat } from '../cats/cats.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Owner {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @OneToMany((type) => Cat, (cat) => cat.owner)
  cat: [Cat];
}
