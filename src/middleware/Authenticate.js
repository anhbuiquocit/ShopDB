import * as jwtUtil from "../util/Jwt.js";

export const jwtFilter = async (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization && authorization.match(/^Bearer /g)) {
    const token = authorization.split(" ")[1];
    if (token) {
      try {
        const tokenDecode = await jwtUtil.verifyToken(token);
        console.log(tokenDecode);
        next();
      } catch (err) {
        next("Unauthorized");
      }
    }
  } else {
    next("Token required");
  }
};
