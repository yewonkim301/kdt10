const mysql = require("mysql2");

const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt",
});

exports.postSignUp = (data, cb) => {
  console.log("postSignUp > ", data);

  const sql = "INSERT INTO user VALUES (NULL, ? , ? , ? )";
  const values = [data.id, data.pw, data.name];
  conn.query(sql, values, (err, rows) => {
    if (err) throw err;
    console.log("User.js > ", rows);
    cb(rows);
  });
};

exports.postSignIn = (data, cb) => {
  console.log("postSignIn > ", data);

  const sql = "SELECT * FROM user WHERE userid = ?";
  const values = [data.loginId, data.loginPw];
  conn.query(sql, values, (err, rows) => {
    if (err) throw err;
    console.log("User.js postSignIn > ", rows[0]);
    cb(rows[0]);
    // 일치하는 userid 없으면 []
    // 있으면 { id: 3, userid: 'a', name: 'a', pw: 'a' }
  });
};

exports.postProfile = (id, cb) => {
  const sql = "SELECT * FROM user where userid = ? ";

  conn.query(sql, id, (err, rows) => {
    if (err) throw err;
    console.log("getProfile User.js > ", rows);
    cb(rows[0]);
  });
};
