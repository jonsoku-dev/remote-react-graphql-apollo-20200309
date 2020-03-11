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
  },
  request: async operation => {
    const token = await localStorage.getItem("tama");
    operation.setContext({
      headers: {
        authorization: token ? token : ""
      }
    });
  },
  clientState: {
    defaults: {
      auth: {
        isLoggedIn: Boolean(localStorage.getItem("tama")),
        __typename: "Auth"
      }
    },
    resolvers: {
      Mutation: {
        signinLocal: (_, { token }, { cache }) => {
          localStorage.setItem("tama", token);
          cache.writeData({
            data: {
              auth: {
                isLoggedIn: true,
                __typename: "Auth"
              }
            }
          });
          return null;
        },
        logoutLocal: (_, __, { cache }) => {
          localStorage.removeItem("tama");
          cache.writeData({
            data: {
              auth: {
                isLoggedIn: false,
                __typename: "Auth"
              }
            }
          });
          return null;
        }
      }
    }
  }
});
