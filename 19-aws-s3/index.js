const express = require("express");
const app = express();
const dotenv = require("dotenv");
const aws = require("aws-sdk"); // aws 설정을 위한 모듈
const multer = require("multer");
const multerS3 = require("multer-s3"); // aws s3에 업로드하기 위한 multer 설정
dotenv.config();
const PORT = process.env.PORT;

// aws 설정
aws.config.update({
  accessKeyId: process.env.AWS_S3_KEY_ID,
  secretAccessKey: process.env.AWS_S3_ACCESS_KEY,
  region: process.env.AWS_S3_REGION,
});

// aws S3 인스턴스 생성
const s3 = new aws.S3();

// view engine 설정
app.set("view engine", "ejs");

// multer 설정 - aws
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_S3_BUCKET,
    acl: "public-read", // 파일 접근 권한 (public-read 로 해야 업로드 된 파일이 공개됨)
    contentType: multerS3.AUTO_CONTENT_TYPE, // 자동감지
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname }); // null은 에러 없다는 의미
    },
    key: (req, file, cb) => {
      cb(null), Date.now().toString() + "-" + file.originalname;
    },
  }),
});

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/upload", upload.array("files"), (req, res) => {
  console.log(req.files);
  res.send(req.files);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
