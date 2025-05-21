import express from "express";
import authRoutes from "./authRoutes";
import walletRoutes from "./walletRoutes";
import notificationRoutes from "./notificationRoutes";
import articlesRoutes from "./articlesRoutes";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/wallets", walletRoutes);
router.use("/notifications", notificationRoutes);
router.use("/articles", articlesRoutes);

export default router;
