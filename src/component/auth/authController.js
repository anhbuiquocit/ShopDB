import * as authDAL from "./authDAL.js";
import * as jwtUtil from "../../util/Jwt.js";
import { hash, compare } from "../../util/Bcrypt.js";
export const login = async (req, res, next) => {
  console.log("Find user...");
  const { username, password } = req.body;
  if (username && password) {
    const user = await authDAL.getUserByUsername(username);
    if (user) {
      const isPasswordValid = await compare(password, user.pass);
      if (isPasswordValid) {
        let data = {
          userId: user.id,
          username: user.username,
          role: user.role || "none",
        };
        const token = await jwtUtil.genarageToken(data, { expiresIn: 86400 });
        const tokenInfo = {
          token: token,
          timeExpireMS: 86400,
        };
        res.status(200).send({
          data: tokenInfo,
        });
      } else {
        res.send({
          message: "username of password is not correct!",
        });
      }
    }
  } else {
    res.status(400).json({
      error: "username and pasword cant of undefind",
    });
  }
};

export const register = async (req, res, next) => {
  const { username, password, name } = req.body;
  if (username && password && name) {
    const user = await authDAL.getUserByUsername(username);
    if (user) {
      next("The username is valid");
    } else {
        console.log('createeeee')
      const passwordHash = hash(password);
      await authDAL.createNewAccount(username, passwordHash, name);
      res.send({
        message: "create account successfully",
      });
    }
  } else {
    next("Invalid input params");
  }
};
