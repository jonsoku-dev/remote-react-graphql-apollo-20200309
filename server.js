require("dotenv").config({ path: "config.env" });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const { ApolloServer } = require("apollo-server-express");

// GraphQL
const { typeDefs } = require("./schema");
const { resolvers } = require("./resolvers");

// 환경설정 변수
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

const app = express();

app.use(cors());
app.use(bodyParser.json());

const Apollo = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  playground: {
    endpoint: "/graphql",
    settings: {
      "editor.theme": "light"
    }
  }
});

Apollo.applyMiddleware({ app });

mongoose
  .connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("DB 접속 완료"))
  .catch(error => console.error(error));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
