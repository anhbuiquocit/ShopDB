import jwt from "jsonwebtoken";
import commonConfig from "../config/commonConfig.js";
export const genarageToken = (claims, options) =>
  new Promise((resolve, reject) => {
    jwt.sign(
      claims,
      commonConfig.JWT_SECRET,
      options || { noTimestamp: true },
      (err, token) => {
        if (err) {
          reject(err);
        } else {
          resolve(token);
        }
      }
    );
  });
export const verifyToken = (token) =>
  new Promise((resolve, reject) => {
    jwt.verify(token, commonConfig.JWT_SECRET, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
