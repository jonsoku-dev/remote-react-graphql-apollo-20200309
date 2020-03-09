import ApolloClient from "apollo-boost";

export const apollo = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  fetchOptions: {
    credentials: "include"
  },
  onError: ({ networkError }) => {
    if (networkError) {
      console.log(`네트워크 에러입니다 : ${networkError}`);
    }
  }
});
