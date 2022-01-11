import { Router } from "express";
import {jwtFilter} from '../../middleware/Authenticate.js'
import * as dbUtil from "../../util/Database.js";
const router = Router();
const path = "/product";
router.get("/", (req, res) => {
  res.send("Okkk");
});
router.get("/list_item", async (req, res, next) => {
  const sql = "select * from product";
  const results = await dbUtil.queryOne(sql);
  res.json({
      data: results,
      message: 'success'
  })
});
router.get('/authorization_api', jwtFilter, async (req, res, next) => {
 try{
  if(req && req.tokenDecode){
    const {tokenDecode} = req;
    console.log('tokenDeocde: ', tokenDecode);
    res.send({
      data: tokenDecode,
      message: 'Success'
    })
  }
 }catch(err){
   next(err)
 }
})
export default { path, router };
