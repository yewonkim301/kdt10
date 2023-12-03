const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

// GET /user
router.get("/", controller.main);

// GET /user/signup
router.get("/signup", controller.sign_up);

// POST /user/signup
router.post("/signup", controller.post_sign_up);

// GET /user/signin
router.get("/signin", controller.sign_in);

// POST /user.signin
router.post("/signin", controller.post_sign_in);

// POST /user/profile
router.post("/profile", controller.post_profile);

router.get("/profile", controller.profile);

module.exports = router;
