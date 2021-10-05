require("dotenv").config();

const express = require("express");
const cors = require("cors");
const port = process.env.DB_PORT;
const app = express();
const bodyParser = require("body-parser");

import "reflect-metadata";
import { createConnection } from "typeorm";
import ConnectionOptions from "./ormconfig";
import infoRouter from "./src/routes/info.routes";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// app.use("/insertInfo", pageInfoController.insertSignUpInfo);
// app.use("/inserList", pageInfoController.searchAllInfo);

createConnection(ConnectionOptions)
  .then(async () => {
    console.log("typeorm connected!");
  })
  .catch((error) => {
    console.log(error);
  });

// router.post("/insertPageInfo", pageInfoController.insertSignUpInfo);

// app.post("/pageInfo", pageInfoController.insertSignUpInfo);
// app.get("/search", pageInfoController.searchAllInfo);
app.use("/", infoRouter);
app.listen(port, () => {
  console.log("the server running");
});
