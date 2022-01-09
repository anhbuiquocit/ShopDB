import { Router } from "express";
import { login, register } from "./authController.js";
const path = "/auth";
const router = Router();
router.post("/login", login);
router.post("/register", register);
export default { path, router };
