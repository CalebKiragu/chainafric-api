import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Wallet route root");
});

export default router;
