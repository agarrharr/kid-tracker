import express from "express";
import fp from "find-free-port";

import serverConfig from "./config/config";
import expressConfig from "./config/express";
// import mongooseConfig from "./config/mongoose";

(async () => {
  const env = (process.env.NODE_ENV = process.env.NODE_ENV || "development");

  const app = express();

  const config = serverConfig[env];
  const [port] = await fp(config.port);

  expressConfig(app, { ...config, port });

  // mongooseConfig(config, env);
})();
