import { Entity, Column, BeforeInsert, Index, OneToMany } from "typeorm";
import { Common } from "./Common";
import { UserToken } from "./UserToken";

const bcrypt = require("bcrypt");

@Entity()
export class User extends Common {
  @Index({ unique: true })
  @Column("varchar", { length: 20, comment: "user id" })
  username: string;

  @Column("varchar", { comment: "user id" })
  password: string;

  @BeforeInsert()
  async saveEncryptedPassword() {
    this.password = await bcrypt.hash(this.password, 5);
  }

  @OneToMany((type) => UserToken, (userToken) => userToken.user, {
    cascade: true,
  })
  userTokens: UserToken[];

  comparePassword(password: string): boolean {
    return bcrypt.compare(password, this.password);
  }
}
