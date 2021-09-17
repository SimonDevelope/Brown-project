require("dotenv").config();
import { ConnectionOptions } from "typeorm";

const ormconfig: ConnectionOptions = {
  type: "mysql",
  host: process.env.TYPEORM_HOST,
  port: Number(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USER,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  synchronize: true,
  logging: false,
  entities: ["src/entity/**/*.ts"],
  cli: {
    entitiesDir: "src/entity/**/*.ts",
  },
};

export default ormconfig;
