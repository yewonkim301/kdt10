const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get("/", (req, res) => {
//   res.render("index");
// });

// 실습
app.get("/", (req, res) => {
  res.render("prac");
});

app.get("/ajax", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.post("/ajax", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// axios
app.get("/axios", (req, res) => {
  console.log(req.query);
  res.send(req.query);
  // 의도적으로 에러 발생
  //   res.status(400).send("error msg!");
});

app.post("/axios", (req, res) => {
  console.log(req.body);
  res.send(req.body);
  const msg;
  //   실습
  if (req.body.id != userId) {
    msg = "id를 확인하세요"
  }
});

// fetch

app.get("/fetch", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.post("/fetch", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// 실습
const userId = "홍길동";
const userPw = "1234";

app.listen(PORT, () => {
  console.log(`server is opening ${PORT}`);
});
