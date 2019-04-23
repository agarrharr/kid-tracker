import express from "express";
import serverConfig from "./config/config";
import expressConfig from "./config/express";
// import mongooseConfig from "./config/mongoose";

const env = (process.env.NODE_ENV = process.env.NODE_ENV || "development");

const app = express();

const config = serverConfig[env];

expressConfig(app, config);

// mongooseConfig(config, env);
