import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Example {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 255 })
  examle1: string;

  @Column("varchar", { length: 255 })
  example2: string;
}
