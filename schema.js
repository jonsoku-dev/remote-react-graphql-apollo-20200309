const path = require("path");
const {
  fileLoader,
  mergeResolvers,
  mergeTypes
} = require("merge-graphql-schemas");
const { makeExecutableSchema } = require("graphql-tools");

const Types = fileLoader(path.join(__dirname, "./server/**/*.graphql"));
const Resolvers = fileLoader(path.join(__dirname, "./server/**/*.resolver.*"));

const mergedTypes = mergeTypes(Types);
const mergedResolvers = mergeResolvers(Resolvers);

const schema = makeExecutableSchema({
  typeDefs: mergedTypes,
  resolvers: mergedResolvers
});

module.exports = schema;
