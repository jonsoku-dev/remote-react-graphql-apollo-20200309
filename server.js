require("dotenv").config({ path: "config.env" });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const { ApolloServer } = require("apollo-server-express");
const verifyJWT = require("./utils/verifyJWT");
const morgan = require("morgan");

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
app.use(morgan("dev"));
app.use((req, res, next) => verifyJWT(req, res, next));

const Apollo = new ApolloServer({
  schema,
  playground: {
    endpoint: "/graphql",
    settings: {
      "editor.theme": "light"
    }
  },
  context: req => {
    return {
      userId: req.req.userId
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
