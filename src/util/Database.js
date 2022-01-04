import mysql from "mysql";
import commonConfig from "../config/commonConfig.js";
// import commonConfig from "../config/commonConfig";
var pool = mysql.createPool(commonConfig.MYSQL_URL);

export const query = async (sql, params) => {
  console.log("---------");
  console.log("sql: ", mysql.format(sql));
  console.log("---------");
  return new Promise((resolve, reject) => {
    pool.query(sql, params, (error, results) => {
      if (error) return reject(error);
      return resolve(results);
    });
  });
};

export const queryOne = async (sql, params) => {
  const results = await query(sql, params);
  return results[0];
};

export const getConnection = async () =>
  new Promise((resolve, reject) => {
    pool.getConnection((error, connection) => {
      if (error) return reject(error);
      return resolve(connection);
    });
  });
