const Prac = require("../model/Prac");

exports.prac = (req, res) => {
  res.render("practice2");
};

exports.logIn = (req, res) => {
  console.log(req.body);
  const userId = Prac.userData().userId;
  const userPw = Prac.userData().userPw;
  // userId, userPw 라는 변수 값과 클라이언트에서 넘겨받은 값이 일치하는지 검사
  if (userId === req.body.userId && userPw === req.body.userPw) {
    res.send({ userInfo: Prac.userData(), isSuccess: true });
  } else {
    res.send({ isSuccess: false });
  }
};
