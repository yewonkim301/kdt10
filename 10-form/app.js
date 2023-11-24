const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

// 미들웨어 등록

// req.body 객체를 해석할 수 있도록 body-parser 미들웨어 등록
app.use(express.urlencoded({ extended: true })); // post 요청으로 들어오는 모든 형식의 데이터를 파싱
app.use(express.json()); // json 형식으로 데이터를 주고받음

app.get("/", (req, res) => {
  // views 폴더 내부에 index라는 ejs 파일을 보여줌
  res.render("index");
});

// GET '/login' 요청이 들어오면 임의의 메시지 전송
//get 방식은 클라이언트에서 보낸 데이터가 req.query에 저장
app.get("/login", (req, res) => {
  console.log(req.query); // { id: 'apple', pw: '1234' }
  //   res.send("get 요청 성공!");

  res.render("result", { title: "Get 요청", userInfo: req.query }); // Get 요청 { id: 'apple', pw: '1234' } -> userInfo는 객체 형태로 이루어져 있음
});

// POST '/login' 요청이 들어오면 임의의 메시지 전송
// post 방식은 클라이언트에서 보낸 데이터가 req.body에 저장
app.post("/login", (req, res) => {
  console.log(req.body); // { id: 'apple', pw: '1234' }
  //   res.send("post 요청 성공!");
  res.render("result", { title: "Post 요청", userInfo: req.body });
});

app.post("/js-form-check", (req, res) => {
  console.log(req.body); // { id: 'apple', post: '회사' }
  res.send("js validation 성공!");
});

app.listen(PORT, function () {
  console.log(`${PORT} is opening!`);
});

// ------------------ 실습 get -----------------------

app.get("/prac-get", (req, res) => {
  console.log(req.query);

  res.render("prac_result", { title: "Get 요청", userInfo: req.query });
  // 해설
  // res.render("prac_result", req.query);
  // 이렇게 쓰면 userInfo.name 으로 안 쓰고 name만 적으면 됨
});

// ------------------ 실습 post -----------------------

app.post("/prac-post", (req, res) => {
  console.log(req.body);
  res.render("prac_result", { title: "Post 요청", userInfo: req.body });
});
