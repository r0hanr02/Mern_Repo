import express from "express";
import { home, register, login } from "../controllers/auth_controller.js";
import validate from "../middlewares/validate-middleware.js";
import signUpSchema from "../Validators/auth-validator.js";

const router = express.Router();

router.route("/").get(home);
router.route("/register").post(validate(signUpSchema), register);
router.route("/login").post(login);

export default router;
