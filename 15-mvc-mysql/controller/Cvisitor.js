const Visitor = require("../model/Visitor");

// GET /
exports.main = (req, res) => {
  res.render("index");
};

// GET /visitor
exports.get_visitors = (req, res) => {
  // [Before]
  /*
  console.log(Visitor.getVisitors()); // [ {}, {} ]
  res.render("visitor", { data: Visitor.getVisitors() });
  */

  // [After]
  // 컨트롤러 -> 모델 -> DB -> 모델 -> 컨트롤러 -> 응답
  // 콜백함수를 써준 이유 : 비동기 처리를 하기 위해서 (자바스크립트는 기다려주지 않음 -> 모델에서 데이터를 받아오는 것도 기다리고 받아온 값을 컨트롤러에서 순차적으로 처리해야 하기 때문에 콜백함수 사용)
  // 1) Visitor.getVisitors() // 함수 호출
  // 2) 모델에서 데이터값 받은 후에 콜백 함수 실행
  Visitor.getVisitors((result) => {
    // 모델의 rows를 result라는 변수명으로 받음
    console.log("Cvisitor.js > ", result);
    res.render("visitor", { data: result });
  });
};

// POST /visitor
exports.post_visitor = (req, res) => {
  console.log(req.body);
  const { name, comment } = req.body; // 기존에 등록되어 있던 comment
  // 요청 시 컨트롤러에서 모델에 필요한 값을 넘겨줘야 함
  // Visitor.postVisitor( view에서 받아온 데이터, 콜백 함수 ) 호출
  Visitor.postVisitor(req.body, (result) => {
    // result: rows.insertId => ex ) 3    -> 새로 등록한 comment 값
    console.log(result);
    res.send({ id: result, name, comment });
  });
};

// GET /visitor => localhost:PORT/visitor?id=N
exports.get_visitor = (req, res) => {
  console.log(req.query); // { id: '1' }
  console.log(req.query.id);

  // 모델에 함수 호출
  // 값을 가져올 콜백함수 result 만들어줌
  Visitor.getVisitor(req.query.id, (result) => {
    // result : rows[0] -> { id: 1, name: '홍길동', comment: '내가 왔다.' }
    console.log("get_visitor Cvisitor.js > ", result);
    res.send(result);
  });
};

// GET /visitor/:id => localhost:PORT/visitor/:id
exports.get_visitor2 = (req, res) => {
  console.log(req.params); // { id: '1' }
  console.log(req.params.id);

  // 모델에 함수 호출
  // 값을 가져올 콜백함수 result 만들어줌
  Visitor.getVisitor(req.params.id, (result) => {
    // result : rows[0] -> { id: 1, name: '홍길동', comment: '내가 왔다.' }
    console.log("get_visitor2 Cvisitor.js > ", result);
    res.send(result);
  });
};

// PATCH /visitor
exports.patch_visitor = (req, res) => {
  console.log(req.body); // { id: 5, name: 'banana2', comment: 'hi' }

  Visitor.patchVisitor(req.body, (result) => {
    console.log("patchVisitor Cvisitor.js > ", result);
    res.send("수정 성공!");
  });
};

// DELETE /visitor
exports.delete_visitor = (req, res) => {
  console.log(req.body);
  console.log(req.body.id);

  Visitor.deleteVisitor(req.body.id, (result) => {
    console.log("deleteVisitor Cvisitor.js > ", result);
    res.send("삭제 성공!");
  });
};
