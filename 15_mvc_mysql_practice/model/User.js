const mysql = require("mysql2");

const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt",
});

exports.postSignUp = (data, cb) => {
  console.log("postSignUP > ", data);

  const sql = "INSERT INTO user VALUES (NULL, ? , ? , ? )";
  const values = [data.id, data.pw, data.name];
  conn.query(sql, values, (err, rows) => {
    if (err) throw err;
    console.log("User.js > ", rows);
    // cb(rows);
  });
};
