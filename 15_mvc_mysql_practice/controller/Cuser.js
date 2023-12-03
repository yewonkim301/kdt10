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
      res.send({ userInfo: result.userid, isSuccess: true });
    } else {
      res.send({ isSuccess: false });
    }
  });
};

exports.profile = (req, res) => {
  res.render("profile");
};

// POST /user/profile/:id
exports.post_profile = (req, res) => {
  console.log("post_profile > ", req.body);
  console.log("post_profile loginId > ", req.body.loginId);

  User.postProfile(req.body.loginId, (res) => {
    console.log("Cuser.js profile > ", res);
    // res.render("profile");
    res.send({ userInfo: res });
  });
};
