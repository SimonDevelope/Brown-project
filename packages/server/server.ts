require("dotenv").config();

const express = require("express");
const cors = require("cors");
const port = process.env.DB_PORT;
const app = express();

import "reflect-metadata";
import { createConnection } from "typeorm";
import ConnectionOptions from "./ormconfig";
import { createUser } from "./src/controller/user.controller";

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.post("/createPhoto", createUser);

createConnection(ConnectionOptions)
  .then(async () => {
    console.log("connected!");
    await createUser().catch((error) => {
      console.log(error);
    });
  })
  .catch((error) => {
    console.log(error);
  });
app.listen(port, () => {
  console.log("the server running");
});
