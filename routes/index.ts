import * as express from "express";
import apiRoutes from "./api-routes";

const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;

router.use(apiRoutes);

export default router;
