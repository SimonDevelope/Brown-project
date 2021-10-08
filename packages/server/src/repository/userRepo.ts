import { Repository, EntityRepository } from "typeorm";
import { User } from "../entity/user";

@EntityRepository(User)
export class UserSignUpRepo extends Repository<User> {
  insertUserDataInfo(
    email: string,
    password: string,
    checkpsw: string,
    name: string,
    phoneNum: string
  ) {
    return this.save({ email, password, checkpsw, name, phoneNum });
  }

  searchAllUserDataInfo() {
    return this.find();
  }
}
