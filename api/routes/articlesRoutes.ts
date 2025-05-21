import { Articles } from "../controllers/articlesController";
import express from "express";
const router = express.Router();

router.get("/", Articles.test);

export default router;
