import express from "express";
import authRoutes from "./auth";
import walletRouter from "./wallet";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/wallets", walletRouter);

export default router;
