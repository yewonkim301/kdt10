const express = require("express");
const app = express();
const PORT = 8000;

// multer 관련 설정
const multer = require("multer");
const path = require("path"); // 경로에 관한 내장 모듈 -> 별도의 install 없이 사용 가능
const upload = multer({
  dest: "uploads/", // dest: 클라이언트가 업로드한 파일을 저장할 서버측 경로
  // 없었던 uploads 폴더가 자동생성됨
});

// multer 세부 설정
const uploadDetail = multer({
  // storage: 저장할 공간에 대한 정보
  storage: multer.diskStorage({
    // destination : 경로 설정
    destination(req, file, done) {
      // done: 콜백 함수
      // done(null, xx) : null -> 에러가 없다는 의미
      done(null, "uploads/"); // 파일을 업로드할 경로 설정
    },
    filename(req, file, done) {
      // 파일의 확장자를 추출 => "path" 모듈 활용
      const ext = path.extname(file.originalname);
      console.log("ext > ", ext);

      console.log("file > ", file.originalname, ext); // 확장자를 제외한 파일이름만
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  // limits: 파일 제한 정보
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
});

// 해설
// multer 세부 설정 - 실습용
const uploadPractice = multer({
  // storage: 저장할 공간에 대한 정보
  storage: multer.diskStorage({
    // destination : 경로 설정
    destination(req, file, done) {
      // done: 콜백 함수
      // done(null, xx) : null -> 에러가 없다는 의미
      done(null, "uploads/"); // 파일을 업로드할 경로 설정
    },
    filename(req, file, done) {
      console.log("file name > req.body : ", req.body);
      // 파일의 확장자를 추출 => "path" 모듈 활용
      const ext = path.extname(file.originalname);
      console.log("ext > ", ext);

      done(null, req.body.id + ext);
    },
  }),
  // limits: 파일 제한 정보
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
});

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// static 등록 => 이미지 경로 접근 가능(프론트)
app.use("/uploads", express.static(__dirname + "/uploads"));
// 프론트에어 /uploads(앞)으로 들어오면 /uploads(뒤)로 보내라는 의미

// app.get("/", (req, res) => {
//   res.render("index");
// });

// 실습(self)
app.get("/", (req, res) => {
  res.render("prac");
});

// 1. single() : 하나의 파일을 업로드
// upload.single('userfile') : 클라이언트 요청이 들어오면,
// multer 설정에 따라 파일을 업로드 한 후, req.file 객체를 생성
// single() 인자는 input 태그의 name 값과 일치시켜야 함
// 응답을 보내기 전에 multer라는 미들웨어를 거쳐가라는 의미
app.post("/upload", uploadDetail.single("userfile"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.send("파일 업로드 완료!");
  /*
  {
    fieldname: 'userfile',      // 폼에 정의한 name 값
    originalname: 'git.jpg',    // 원본 파일명
    encoding: '7bit',           // 파일 인코딩 타입
    mimetype: 'image/jpeg',     // 파일 타입
    destination: 'uploads/',
    filename: 'git1701053911513.jpg',
    path: 'uploads/git1701053911513.jpg',
    size: 4373
  }
  */
});

// 2. array(): 하나의 인풋에 여러 파일 업로드
app.post("/upload/array", uploadDetail.array("userfiles"), (req, res) => {
  // [{file1 정보}, {fil2 정보}, ..,] : 배열 형태
  console.log(req.files);
  console.log(req.body);
  res.send("하나의 인풋에 여러 파일 업로드 완료!");
});

// 3. fields(): 여러 파일을 각각의 인풋에 업로드
app.post(
  "/upload/fields",
  uploadDetail.fields([{ name: "userfile1" }, { name: "userfile2" }]),
  (req, res) => {
    /*
    {
    userfile1: [
        { 파일 정보 }
    ],
    userfile2: [
        { 파일 정보 }
    ]
    }
     */
    console.log(req.files);
    console.log(req.body);
    res.send("여러 개의 인풋에 각각의 파일 업로드 완료!");
  }
);

// 동적 폼 전송
app.post("/dynamic", uploadDetail.single("dynamicFile"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.send({ file: req.file, title: req.body.title });
});

// 실습(self)
app.post("/signIn", uploadDetail.single("image"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.send({
    id: req.body.id,
    pw: req.body.pw,
    name: req.body.name,
    age: req.body.age,
    file: req.file,
  });
});

// 실습 해설
app.post("/upload/practice", uploadPractice.single("profile"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  res.send("응답");
});
app.post("/upload/practice2", uploadPractice.single("profile"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  res.send("회원가입 완료");
});

app.listen(PORT, () => {
  console.log(`${PORT} port is opening!`);
});
