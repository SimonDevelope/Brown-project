const passport = require("passport");
import { Strategy as LocalStrategy } from "passport-local";

import { getCustomRepository } from "typeorm";
import { User } from "../entity/User";
import { UserRepository } from "../repository/UserRepository";

export const reqUser = (user: User): Express.User => {
  return {
    id: user.id,
    username: user.username,
  };
};

//passport local strategy => auth with id and password
passport.use(
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      session: false,
    },
    async (username, password, done) => {
      const userRepository = getCustomRepository(UserRepository);
      const user = await userRepository.findByUserName(username);

      //wrong username
      if (!user) return done(null, false);

      //check password
      if (await user.comparePassword(password))
        return done(null, reqUser(user));

      //invalid password
      return done(null, false);
    }
  )
);
