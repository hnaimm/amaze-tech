import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  sku: string;

  @Column()
  unit_price: number;

  @Column()
  image: string;

  @Column()
  color: string;

  @Column()
  size: string;
}
