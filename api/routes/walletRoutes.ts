import { Wallet } from "../controllers/walletController";
import express from "express";
const router = express.Router();

router.get("/", Wallet.test);

export default router;
