import * as express from "express";

const router = express();
const router = express.Router();
const port = process.env.PORT || 3000;

router.route("/tasks").get((req, res) => {
  const response = { id: 1, name: "Dishes" };
  res.json(response);
});
router.use("/api", router);

router.get("/", (req, res) => {
  res.send("Welcome!");
});

router.listen(port, () => {
  console.log(`Running on port ${port}`);
});
