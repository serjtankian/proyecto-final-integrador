const express = require("express");
const router = express.Router();
const userRouter = require("./user");
const propertyRouter = require("./properties");
const categoryRouter = require("./categories");

router.use("/user", userRouter);
router.use("/properties", propertyRouter);
router.use("/categories", categoryRouter);
module.exports = router;
