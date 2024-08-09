const express = require("express");

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send({ message: "welcome to the user profile" });
});

module.exports = userRouter;
