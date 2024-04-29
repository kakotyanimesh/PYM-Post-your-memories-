import { Router } from "express";
import { useRegister } from "../controllers/user.controllers.js";

const router = Router()

router.route("/register", useRegister)

export default router