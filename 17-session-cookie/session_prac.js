const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get("/", (req, res) => {
//   res.render("index");
// });

// 실습2
// const user = { id: "홍길동", pw: "1234" };

// prac2
app.use(
  session({
    secret: "mySession",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      maxAge: 3 * 60 * 1000,
    },
  })
);

app.get("/", (req, res) => {
  res.render("prac2", {
    // id: user.id,
    // pw: user.pw,
    isLogin: req.session.isLogin,
  });
  console.log(req.session);
});

// 실습2(post)
app.post("/set", (req, res) => {
  console.log(req.body);
  req.session.userId = req.body.id;
  req.session.userPw = req.body.pw;
  res.send("완료");
  console.log(req.session);
});

app.post("/axios", (req, res) => {
  console.log(req.body);
  // userId, userPw라는 변수 값과 클라이언트에서 넘겨 받은 값이 일치하는지 검사
  if (
    req.session.userId === req.body.id &&
    req.session.userPw === req.body.pw
  ) {
    req.session.user = req.body.id;
    req.session.isLogin = "true";
    console.log(req.session);
    res.send({
      userInfo: req.session.user,
      isLogin: req.session.isLogin,
      isSuccess: true,
    });
  } else {
    res.send({ isSuccess: false, isLogin: req.session.isLogin });
  }
  // 결과 값을 반환
});

app.post("/destroy", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      res.send("fail");
    }
    res.redirect("/");
    console.log(req.session);
  });
});

app.listen(PORT, () => {
  console.log(`server is opening ${PORT}`);
});
