import * as express from "express";
import mainConfig from "../config/config";

const env = (process.env.NODE_ENV = process.env.NODE_ENV || "development");
const config = mainConfig[env];

const router = express.Router();

router.route("/tasks").get((req, res) => {
  res.json(null);
});

export default router;
