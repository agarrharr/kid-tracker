"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var router = express.Router();
var port = process.env.PORT || 3000;
router.route("/tasks").get(function (req, res) {
    var response = { id: 1, name: "Dishes" };
    res.json(response);
});
app.use("/api", router);
app.get("/", function (req, res) {
    res.send("Welcome!");
});
app.listen(port, function () {
    console.log("Running on port " + port);
});
