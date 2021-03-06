// const express = require("express");
import express from "express";
// const morgan = require("morgan");
import morgan from "morgan";
import bodyParser from "body-parser";
import routers from "./component/router.js";
import { corsMiddleware } from "./middleware/Cors.js";

const app = express();
const port = 3001;
app.use(morgan("combined"));
app.use(corsMiddleware);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
for (const router of routers) {
  app.use(router.path, router.router);
}
