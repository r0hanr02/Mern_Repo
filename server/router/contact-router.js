import express from "express";
import { home, register, login } from "../controllers/auth_controller.js";
import validate from "../middlewares/validate-middleware.js";
import signUpSchema from "../Validators/auth-validator.js";
import contactForm from "../controllers/contact-controller.js";

const router = express.Router();

router.route("/contact").post(contactForm);

export default router;
