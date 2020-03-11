import { gql } from "apollo-boost";
export const SAY_HELLO = gql`
  query {
    sayHello(name: "짬뽕") {
      success
      error
      data
    }
  }
`;

export const SIGN_UP_USER = gql`
  mutation($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      success
      error
      data
    }
  }
`;
export const IS_LOGGED_IN = gql`
  {
    auth {
      isLoggedIn @client
    }
  }
`;

export const SIGN_IN_USER_LOCAL = gql`
  mutation SigninLocal($token: String!) {
    signinLocal(token: $token) @client
  }
`;

export const LOG_OUT_USER_LOCAL = gql`
  mutation LogoutLocal {
    logoutLocal @client
  }
`;
