import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class SignupInformation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 255 })
  title: string;
}
