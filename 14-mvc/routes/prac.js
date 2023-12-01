const express = require("express");
const router = express.Router();

const controller = require("../controller/Cprac");

router.get("/", controller.prac);

// /prac/login
router.post("/login", controller.logIn);

module.exports = router;
