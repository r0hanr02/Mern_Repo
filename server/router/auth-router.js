import express from "express";
import { home, register } from "../controllers/auth_controller.js";
const router = express.Router();

router.route("/").get(home);
router.route("/register").post(register);

export default router;
