import { Router } from "express";
import * as dbUtil from "../../util/Database.js";
const router = Router();
const path = "/product";
router.get("/", (req, res) => {
  res.send("Okkk");
});
router.get("/list_item", async (req, res, next) => {
  const sql = "select * from product";
  const results = await dbUtil.queryOne(sql);
  console.log(results);
  res.json({
      data: results,
      message: 'success'
  })
});
export default { path, router };
