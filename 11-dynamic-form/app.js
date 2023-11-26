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

// 실습1
app.get("/", (req, res) => {
  res.render("prac");
});

// 실습2
// app.get("/", (req, res) => {
//   res.render("prac2", { id: "홍길동", pw: "1234" });
// });

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

/*
app.post("/axios", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});
*/

// 실습2(post)
app.post("/axios", (req, res) => {
  console.log(req.body);
  res.render("prac2", { id: "홍길동", pw: "1234" });
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

app.listen(PORT, () => {
  console.log(`server is opening ${PORT}`);
});
