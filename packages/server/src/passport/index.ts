import passport = require("passport");
const jwt = require("jsonwebtoken");
import { Strategy as BeareStrategy } from "passport-http-bearer";
require("dotenv").config();

const SECRET = process.env.JWT_SECRET;
const TOKEN_EXPIRE = "7d";

//passport beare strategy => auth with token

passport.use(
  new BeareStrategy((token, done) => {
    jwt.verify(token, SECRET, (err, user) => {
      if (err) {
        //token expired
        if (err instanceof jwt.TokenExpiredError)
          return done(new Error("Login Failed Error"), false);

        //token invalid
        if (err instanceof jwt.JsonWebTokenError)
          return done(new Error("Login Failed ERror"), false);
      }
      //error
      return done(err, false);
    });
    console.log(BeareStrategy);
  })
);
