import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class SignUpPage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 255 })
  title: string;
}
