const mysql = require("mysql2");

const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt",
});

// 회원가입 요청
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

// 로그인 요청
exports.postSignIn = (data, cb) => {
  console.log("postSignIn > ", data);
  /*
  const sql = "SELECT * FROM user WHERE userid = ?";
  const values = [data.loginId, data.loginPw];
  conn.query(sql, values, (err, rows) => {
    if (err) throw err;
    console.log("User.js postSignIn > ", rows[0]);
    cb(rows[0]);
    // 일치하는 userid 없으면 []
    // 있으면 { id: 3, userid: 'a', name: 'a', pw: 'a' }
  });
  */

  // 해설
  const sql = "SELECT * FROM user WHERE userid = ? and pw = ?";
  const values = [data.loginId, data.loginPw];
  conn.query(sql, values, (err, rows) => {
    if (err) throw err;
    console.log("User.js postSignIn > ", rows[0]);
    cb(rows[0]);
    // 일치하는 userid 없으면 []
    // 있으면 { id: 3, userid: 'a', name: 'a', pw: 'a' }
  });
};

// 회원정보 수정 페이지 요청
exports.postProfile = (userid, cb) => {
  const sql = "SELECT * FROM user WHERE userid = ? ";

  conn.query(sql, [userid], (err, rows) => {
    if (err) throw err;
    console.log("getProfile User.js > ", rows);
    cb(rows);
  });
};

// 회원정보 수정 요청
exports.editProfile = (data, cb) => {
  const sql = "UPDATE user SET name = ?, pw = ? WHERE userid = ?";
  const values = [data.userName, data.userPw, data.userId];
  conn.query(sql, values, (err, rows) => {
    if (err) throw err;

    console.log("User.js editProfile > ", rows);
    /*
    ResultSetHeader {
      fieldCount: 0,
      affectedRows: 0,
      insertId: 0,
      info: 'Rows matched: 0  Changed: 0  Warnings: 0',
      serverStatus: 2,
      warningStatus: 0,
      changedRows: 0
    }
    */
    cb(rows);
  });
};

// 회원 탈퇴 요청
exports.deleteProfile = (userId, cb) => {
  const sql = "DELETE FROM user WHERE userid = ?";
  conn.query(sql, [userId], (err, rows) => {
    if (err) throw err;
    console.log("User.js deleteProfile > ", rows);
    cb(rows);
  });
};
