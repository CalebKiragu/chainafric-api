import { Auth } from "../controllers/authController";
import express from "express";
const router = express.Router();

router.get("/", Auth.test);
router.post("/google", Auth.googleAuth);

export default router;
