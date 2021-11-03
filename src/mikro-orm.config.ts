import { Options } from "@mikro-orm/core";
import path from "path";

import { Post } from "./entities/Post";
import { User } from "./entities/User";
import { __prod__ } from "./constants";

const config: Options = {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post, User],
  dbName: "lireddit",
  type: "postgresql",
  password: "12345",
  debug: !__prod__,
};

export default config;
