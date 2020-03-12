import { gql } from "apollo-boost";

export const SIGN_UP_USER = gql`
  mutation($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      success
      error
      data
    }
  }
`;
