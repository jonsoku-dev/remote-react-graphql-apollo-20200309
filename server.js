require("dotenv").config({ path: "config.env" });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const { ApolloServer } = require("apollo-server-express");
const jwt = require("jsonwebtoken");

// GraphQL
const schema = require("./schema");

// 환경설정 변수
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use(async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    if (token) {
      let userId = await jwt.verify(token, process.env.JWT_SECRET || "");
      userId = userId._id;
      req.userId = userId;
    }
    next();
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: "토큰 인증 에러입니다.",
      data: null
    };
  }
});

const Apollo = new ApolloServer({
  schema,
  playground: {
    endpoint: "/graphql",
    settings: {
      "editor.theme": "light"
    }
  },
  context: ({ req }) => {
    return {
      currentUserId: req.userId
    };
  }
});

Apollo.applyMiddleware({ app });

mongoose
  .connect(MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("DB 접속 완료"))
  .catch(error => console.error(error));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
