const express = require("express");
const app = express();
const PORT = 8000;
const db = require("./model/index");

app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userRouter = require("./routes/user");
app.use("/user", userRouter); // localhost:PORT/user 기본경로

app.get("*", (req, res) => {
  res.render("404");
});

db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
