import { Router } from "express";
import * as dbUtil from "../../util/Database.js";
const router = Router();
const path = "/product";
router.get("/", (req, res) => {
  res.send("Okkk");
});
router.get("/list_item", async (req, res, next) => {
  const {authorization} = req.headers
  if(authorization && authorization.match(/^Bearer /g)){
    res.send({
      token: authorization.split(' ')[1],
      message: 'OK'
    })
  }else{
    res.send({
      message: 'Authorization required'
    })
    next('Authorization');
  }
  // const sql = "select * from product";
  // const results = await dbUtil.queryOne(sql);
  // console.log(results);
  // res.json({
  //     data: results,
  //     message: 'success'
  // })
});
export default { path, router };
