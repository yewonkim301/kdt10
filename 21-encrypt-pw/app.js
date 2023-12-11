const express = require("express");
const app = express();
const db = require("./models/index");
const dotenv = require("dotenv");
const session = require("express-session");
dotenv.config();
const jwt = require("jsonwebtoken");
const PORT = process.env.PORT || 8888;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO: express-session 미들웨어 등록
app.use(
  session({
    secret: "mySession",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      maxAge: 5 * 60 * 1000,
    },
  })
);

const indexRouter = require("./routes");
app.use("/", indexRouter);

// TODO: routes/user 요청 경로 분리

// TODO: 404 처리
app.get("*", (req, res) => {
  res.render("404");
});

db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
