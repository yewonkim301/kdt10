const express = require("express");
const router = express.Router();

const controller = require("../controller/Cprac");

router.get("/", controller.prac);

// /prac/axios2
router.post("/axios2", controller.logIn);

module.exports = router;
