/*
exports.getVisitors = () => {
  return [
    { id: 1, name: "홍길동", comment: "내가 왔다." },
    { id: 2, name: "이찬혁", comment: "으라차차" },
  ];
};
*/

// -------- mysql 연결 --------
const mysql = require("mysql2");

const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt",
});

exports.getVisitors = (cb) => {
  // query(sql, values?, 콜백함수) -> values는 생략 가능 / 마지막 인자로는 콜백함수가 들어감!
  conn.query(`SELECT * FROM visitor`, (err, rows) => {
    // DB 데이터 가져온 후 실행
    if (err) throw err;

    console.log("Visitor.js > ", rows);
    /* 
    Visitor.js >  [
    { id: 1, name: '홍길동', comment: '내가 왔다.' },
    { id: 2, name: '이찬혁', comment: '으라차차' }
    ] 
  */
    cb(rows); // 컨트롤러로 결과값을 넘겨줌
  });
};

exports.postVisitor = (data, cb) => {
  // data: req.body;
  // cb: 콜벡 함수;
  console.log("postVisitor > ", data);

  /*
  Prepared Statements
  SQL 쿼리에서 사용자 입력을 안전하게 처리하고 SQL 인젝션 공격을
  방지하기 위한 방법
  입력 데이터를 직접 문자열로 쿼리에 삽입하는 대신, 플레이스홀더를 사용하여 쿼리 작성
  mysql 에서는 ? (물음표) 사용
   */
  const sql = "INSERT INTO visitor (name, comment) VALUES ( ? , ? )";
  const values = [data.name, data.comment];
  conn.query(sql, values, (err, rows) => {
    if (err) throw err;

    console.log("Visitor.js > ", rows);

    cb(rows.insertId); // 콜벡함수 호출, 매개변수로 insertId 값을 넘겨줌
  });
};

exports.getVisitor = (id, cb) => {
  const sql = "SELECT * FROM visitor WHERE id = ?";
  // ?에 들어갈 수 있도록 id 값을 배열에 넣어서 줌
  conn.query(sql, [id], (err, rows) => {
    if (err) throw err;

    console.log("getVisitor Visitor.js > ", rows);
    // [ { id: 1, name: '홍길동', comment: '내가 왔다.' } ]
    cb(rows[0]);
  });
};

exports.patchVisitor = (data, cb) => {
  const sql = "UPDATE visitor SET name = ?, comment = ? WHERE id = ?";
  const values = [data.name, data.comment, data.id];
  conn.query(sql, values, (err, rows) => {
    if (err) throw err;

    console.log("patchVisitor Visitor.js > ", rows);
    /*
    ResultSetHeader {
      fieldCount: 0,
      affectedRows: 1,
      insertId: 0,
      info: 'Rows matched: 1  Changed: 1  Warnings: 0',
      serverStatus: 2,
      warningStatus: 0,
      changedRows: 1
    }
    */
    cb(rows);
  });
};

exports.deleteVisitor = (id, cb) => {
  console.log(id);

  const sql = "DELETE FROM visitor WHERE id = ?";
  // (err, rows) 콜백함수로 결과 받음
  conn.query(sql, [id], (err, rows) => {
    if (err) throw err;

    console.log("deleteVisitor Visitor.js > ", rows);
    /*
    ResultSetHeader {
      fieldCount: 0,
      affectedRows: 1,
      insertId: 0,
      info: '',
      serverStatus: 2,
      warningStatus: 0,
      changedRows: 0
    }
    */
    cb(rows);
  });
};
