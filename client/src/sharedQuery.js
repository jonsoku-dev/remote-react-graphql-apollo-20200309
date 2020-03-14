import { gql } from "apollo-boost";

export const GET_ME = gql`
  query GetMe {
    getMe {
      success
      error
      data {
        id
      }
    }
  }
`;
