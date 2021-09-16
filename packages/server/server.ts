require("dotenv").config();

const express = require("express");
const cors = require("cors");
const port = process.env.DB_PORT;
const app = express();

import { Request, Response } from "express";
import "reflect-metadata";
import { createConnection } from "typeorm";
import connectionOptions from "./ormconfig";

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

createConnection(connectionOptions)
  .then(() => {
    console.log("connected!");
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/", async (req: Request, res: Response) => {
  res.send("hi");
});
app.listen(port, () => {
  console.log("the server running");
});
