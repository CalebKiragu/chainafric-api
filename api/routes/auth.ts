import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  console.log({
    action: "/auth hit",
    time: Date.now(),
    ip: req.realIp,
    env: process.env.NODE_ENV,
  });
  const response = {
    code: 200,
    msg: "success",
    ip: req.realIp,
    service: "api",
    env: process.env.NODE_ENV,
    at: new Date(Date.now()).toLocaleString(),
  };
  res.send(response);
});

export default router;
