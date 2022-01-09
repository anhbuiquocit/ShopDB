import * as dbUtil from "../../util/Database.js";
import { v4 as uuidv4 } from "uuid";
export const getUserByUsername = async (username, password) => {
  const sql = "select * from db_user where username = ?";
  const result = await dbUtil.queryOne(sql, [username, password]);
  return result;
};
export const createNewAccount = async (username, password, u_name) => {
  const sql =
    "insert into db_user (id, u_name, username, pass) values(?, ?, ?, ?)";
  const uuid = uuidv4();
  const result = await dbUtil.queryOne(sql, [
    uuid,
    u_name,
    username,
    password,
  ]);
  return result;
};
