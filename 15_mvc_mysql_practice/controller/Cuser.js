const User = require("../model/User");

// GET /user
exports.main = (req, res) => {
  res.render("index");
};

// GET /user/signup
exports.sign_up = (req, res) => {
  res.render("signup");
};

// GET /user/signin
exports.sign_in = (req, res) => {
  res.render("signin");
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

// POST /user/signin
exports.post_sign_in = (req, res) => {
  console.log(req.body);
};
