import { gql } from "apollo-boost";

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
