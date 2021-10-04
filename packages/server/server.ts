require("dotenv").config();

const express = require("express");
const cors = require("cors");
const port = process.env.DB_PORT;
const app = express();

import "reflect-metadata";
import { createConnection } from "typeorm";
import ConnectionOptions from "./ormconfig";
import { Router } from "express";
import {
  insertSignUpInfo,
  searchAllInfo,
} from "./src/controller/signUpPage_controller";
import {
  insertExample,
  searchAllList,
} from "./src/controller/example.controller";

const router = Router();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(Router());

createConnection(ConnectionOptions)
  .then(async () => {
    console.log("typeorm connected!");
  })
  .catch((error) => {
    console.log(error);
  });

app.post("/insertInfo", insertSignUpInfo);
app.get("/insertInfo/infoList", searchAllInfo);
app.post("/example", insertExample);
app.get("/example/list", searchAllList);

app.listen(port, () => {
  console.log("the server running");
});
