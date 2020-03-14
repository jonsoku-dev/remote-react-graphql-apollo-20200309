require("dotenv").config({ path: "config.env" });
const express = require("express");
const connectDB = require("./database/util/connect");
const cors = require("cors");
const bodyParser = require("body-parser");
const { ApolloServer } = require("apollo-server-express");
const jwt = require("jsonwebtoken");
const path = require("path");

// DB접속
connectDB();

// 환경설정 변수
const PORT = process.env.PORT;

// GraphQL
const schema = require("./schema");

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
    } else {
      req.userId = null;
    }
    next();
  } catch (error) {
    console.log(error);
    next();
  }
});

const Apollo = new ApolloServer({
  schema,
  playground: process.env.NODE_ENV === "development" && {
    endpoint: "/graphql",
    settings: {
      "editor.theme": "light"
    }
  },
  context: ({ req }) => {
    return {
      currentUserId: req.userId
    };
  },
  formatError(error) {
    console.log(error);
    return {
      error: error.message
    };
  }
});

Apollo.applyMiddleware({ app });

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
