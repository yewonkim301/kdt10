const express = require("express");
const controller = require("../controller/Cmain");
const router = express.Router();

// 기본주소: localhost:PORT/
// router.get("/", controller.main);

// GET /players : 전체 선수 조회
router.get("/players", controller.getPlayers);

module.exports = router;
