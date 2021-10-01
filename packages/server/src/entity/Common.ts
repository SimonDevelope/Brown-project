import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Common {
  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;

  @CreateDateColumn({ comment: "create date" })
  createdAt: string;

  @UpdateDateColumn({ comment: "update date" })
  updateAt: string;
}
