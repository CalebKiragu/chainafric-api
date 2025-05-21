import { Notification } from "../controllers/notificationController";
import express from "express";
const router = express.Router();

router.get("/", Notification.test);

export default router;
