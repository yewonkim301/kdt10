const models = require("../model/index");
const User = models.User;

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

  /*
  User.postSignUp(req.body, (result) => {
    console.log(result);
    res.send({ id, pw, name });
  });
  */

  // INSERT INTO user VALUES (NULL, ? , ? , ? )
  User.create({
    userid: id,
    name: name,
    pw: pw,
  }).then((result) => {
    console.log("create > ", result);
    res.send(result); //   dataValues: { id: 12, userid: 'f', name: 'f', pw: 'f' }
  });
};

// GET /user/signin
exports.sign_in = (req, res) => {
  res.render("signin");
};

// POST /user/signin
exports.post_sign_in = (req, res) => {
  console.log("post_sign_in > ", req.body);

  /*
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
  */

  // SELECT * FROM user WHERE userid = ? and pw = ?
  User.findOne({
    where: { userid: req.body.loginId, pw: req.body.loginPw },
  }).then((result) => {
    console.log("findOne", result);
    // result
    // id, pw 일치 : {}
    // 불일치 : null
    if (!result) {
      res.send(null);
    } else if (
      result.userid === req.body.loginId &&
      result.pw === req.body.loginPw
    ) {
      res.send({ userInfo: result, isSuccess: true });
    } else {
      res.send({ isSuccess: false });
    }
  });
};

// POST /user/profile/:id
exports.post_profile = (req, res) => {
  console.log("post_profile > ", req.body);

  /*
  User.postProfile(req.body.userid, (result) => {
    console.log("Cuser.js profile > ", result[0]);
    if (result.length > 0) res.render("profile", { data: result[0] });
  });
  */

  // SELECT * FROM user WHERE userid = ?
  User.findOne({
    where: { userid: req.body.userid },
  }).then((result) => {
    console.log("profile findOne > ", result);
    res.render("profile", { data: result });
  });
};

// 회원 정보 수정 요청
exports.edit_profile = (req, res) => {
  console.log("edit_profile > ", req.body);
  /*
  User.editProfile(req.body, (result) => {
    res.send("회원정보 수정 성공!");
  });
  */

  // UPDATE user SET name = ?, pw = ? WHERE userid = ?
  User.update(
    {
      name: req.body.userName,
      pw: req.body.userPw,
    },
    {
      where: {
        userid: req.body.userId,
      },
    }
  ).then((result) => {
    console.log("update > ", result);
    res.send("회원정보 수정 성공!");
  });
};

// 회원 탈퇴 요청
exports.delete_profile = (req, res) => {
  console.log("delete_profile", req.body);
  /*
  User.deleteProfile(req.body.userId, () => {
    res.send({ deletedId: req.body.userid });
  });
  */

  // DELETE FROM user WHERE userid = ?
  User.destroy({
    where: { userid: req.body.userId },
  }).then((result) => {
    console.log("destroy", result);
    res.send("삭제 성공!");
  });
};
