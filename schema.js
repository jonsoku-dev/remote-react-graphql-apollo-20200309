const { makeExecutableSchema } = require("graphql-tools");
const {
  fileLoader,
  mergeResolvers,
  mergeTypes
} = require("merge-graphql-schemas");
const path = require("path");

const allTypes = fileLoader(path.join(__dirname, "./api/**/*.graphql"));

const allResolvers = fileLoader(path.join(__dirname, "./api/**/*.resolvers.*"));

const mergedTypes = mergeTypes(allTypes);
const mergedResolvers = mergeResolvers(allResolvers);

const schema = makeExecutableSchema({
  typeDefs: mergedTypes,
  resolvers: mergedResolvers
});

module.exports = schema;
