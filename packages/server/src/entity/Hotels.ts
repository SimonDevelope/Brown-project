import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Hotel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  location: string;

  @Column()
  name: string;

  @Column()
  phoneNumber: number;
}
