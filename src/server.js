// const express = require("express");
import express from 'express';
// const morgan = require("morgan");
import morgan from 'morgan'
import * as dbUtil from './util/Database.js'
// const dbUtil = require("./util/Database");
const app = express();
const port = 3000;
app.use(morgan("combined"));
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/product", async (req, res) => {
  const sql = "select * from product";
  const results = await dbUtil.queryOne(sql);
  console.log('result: ', results);
});
