// 유저에 대한 처리
// [After] model 연결
const User = require("../model/User");

// GET /user
exports.user = (req, res) => {
  res.render("user", { userInfo: User.userInfo() });
};
