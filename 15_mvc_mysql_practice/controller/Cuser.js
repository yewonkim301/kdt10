const User = require("../model/User");

// GET /user
exports.main = (req, res) => {
  res.render("index");
};

// GET /user/signup
exports.sign_up = (req, res) => {
  res.render("signup");
};

// POST /user/signup
exports.post_sign_up = (req, res) => {
  // 뷰(요청) -> 라우터 -> 컨트롤러 -> 모델 -> DB -> 모델 -> 컨트롤러 -> 뷰(응답)
  console.log("post_sign_up req > ", req.body);
  const { id, pw, name } = req.body;

  User.postSignUp(req.body, (result) => {
    console.log(result);
    res.send({ id, pw, name });
  });
};

// GET /user/signin
exports.sign_in = (req, res) => {
  res.render("signin");
};

// POST /user/signin
exports.post_sign_in = (req, res) => {
  console.log("post_sign_in > ", req.body);

  User.postSignIn(req.body, (result) => {
    console.log("Cuser.js postSignIN > ", result);

    if (!result) {
      res.send(null);
    } else if (
      result.userid === req.body.loginId &&
      result.pw === req.body.loginPw
    ) {
      //   console.log("postSignIn reseult", result.userid);
      res.send({ userInfo: result, isSuccess: true });
    } else {
      res.send({ isSuccess: false });
    }
  });
};

// POST /user/profile/:id
exports.post_profile = (req, res) => {
  console.log("post_profile > ", req.body); // { userid: 'a' }

  User.postProfile(req.body.userid, (result) => {
    console.log("Cuser.js profile > ", result[0]);
    if (result.length > 0) res.render("profile", { data: result[0] });
  });
};

// 회원 정보 수정 요청
exports.edit_profile = (req, res) => {
  console.log("edit_profile > ", req.body);
  User.editProfile(req.body, (result) => {
    res.send("회원정보 수정 성공!");
  });
};

// 회원 탈퇴 요청
exports.delete_profile = (req, res) => {
  console.log("delete_profile", req.body);
  User.deleteProfile(req.body.userId, () => {
    res.send({ deletedId: req.body.userid });
  });
};
