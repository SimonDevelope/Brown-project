import { EntityRepository, Repository, Not } from "typeorm";
const lodash = require("lodash");
import { isNil } from "lodash";
import { User } from "../entity/User";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  findByUserName(username: string) {
    return this.findOne({ username });
  }

  async isDuplicate(user: { id?: number; username?: string }) {
    if (isNil(user.username)) return null;

    const where = user.id
      ? { username: user.username, id: Not(user.id) }
      : { username: user.username };

    return (await this.count({ where })) > 0;
  }

  async signup(user: User) {
    return this.manager.transaction(async (transactionManager) => {
      const registedUser = await transactionManager.save(user);
      return registedUser;
    });
  }
}
