// math2 module

const add = (a, b) => a + b;
const PI = 3.141592;
const E = 2.718;

// 1) 객체로 감싸서 내보내기
module.exports = {
  add: add,
  PI, // PI: PI 와 동일
  E: E,
};

// 2) 하나씩 내보내기
// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.E = E;

// // -> 위에거 생략
// exports.add = add;
// exports.PI = PI;
// exports.E = E;
