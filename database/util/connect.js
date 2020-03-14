const mongoose = require("mongoose");

// 환경설정 변수
const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log("DB 접속 완료");
  } catch (error) {
    console.error(error);
    exit(1);
  }
};

module.exports = connectDB;
