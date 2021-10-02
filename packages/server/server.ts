require("dotenv").config();

const express = require("express");
const cors = require("cors");
const port = process.env.DB_PORT;
const app = express();

import "reflect-metadata";
import { createConnection } from "typeorm";
import ConnectionOptions from "./ormconfig";
import { SignupController } from "./src/repository/signup.controller";

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

createConnection(ConnectionOptions)
  .then(async () => {
    SignupController().catch((err) => {
      console.log(err);
    });
    console.log("connected!");
  })
  .catch((error) => {
    console.log(error);
  });
app.listen(port, () => {
  console.log("the server running");
});
