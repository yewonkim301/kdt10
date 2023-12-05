const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

// GET /user
router.get("/", controller.main);

// GET /user/signup - 회원가입 페이지
router.get("/signup", controller.sign_up);

// POST /user/signup - 회원가입 요청
router.post("/signup", controller.post_sign_up);

// GET /user/signin - 로그인 페이지
router.get("/signin", controller.sign_in);

// POST /user.signin - 로그인 요청
router.post("/signin", controller.post_sign_in);

// POST /user/profile
router.post("/profile", controller.post_profile);

// PATCH /user/profile/edit - 회원 정보 수정 요청
router.patch("/profile/edit", controller.edit_profile);

// DELETE /user/profile/delete - 회원 탈퇴 요청
router.delete("/profile/delete", controller.delete_profile);

module.exports = router;
