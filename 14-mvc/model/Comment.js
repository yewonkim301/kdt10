// (임시) DB로부터 받아온 데이터 댓글 목록 (가정)
// commentInfos 함수 호출되면 배열 반환
exports.commentInfos = () => {
  return [
    {
      id: 1,
      userid: "helloword",
      date: "2022-10-31",
      comment: "안녕하세요~",
    },
    {
      id: 2,
      userid: "hello",
      date: "2022-11-31",
      comment: "반가워요~",
    },
    {
      id: 3,
      userid: "apple",
      date: "2023-3-31",
      comment: "오 신기하다~",
    },
    {
      id: 4,
      userid: "best",
      date: "2022-4-31",
      comment: "댓글 적기~",
    },
  ];
};
