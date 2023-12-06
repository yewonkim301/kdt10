const express = require("express");
const controller = require("../controller/Cmain");
const router = express.Router();

// 기본주소: localhost:PORT/
// router.get("/", controller.main);

// GET /players : 전체 선수 조회
router.get("/players", controller.getPlayers); // api.http에서 보낸 요청 받음

// GET /players/:player_id - 특정 선수 조회
router.get("/players/:player_id", controller.getPlayer);

// POST /players - 선수 추가
router.post("/players", controller.postPlayer);

// PATCH /players/:player_id/team - 특정 선수의 소속팀 변경
router.patch("/players/:player_id/team", controller.patchPlayer);

// DELETE /players/:player_id - 특정 선수 조회
router.delete("/players/:player_id", controller.deletePlayer);

// --------------- 팀 관련 API ----------------------
// GET /teams - 전체 팀 조회
router.get("/teams", controller.getTeams);

// GET /teams/:team_id - 특정 팀 조회
router.get("/teams/:team_id", controller.getTeam);

// GET /teams/:team_id/players - 특정 팀의 모든 선수 조회
router.get("/teams/:team_id/players", controller.getTeamPlayers);

module.exports = router;
