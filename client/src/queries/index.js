import { gql } from "apollo-boost";

export const SAY_HELLO = gql`
  query {
    sayHello {
      success
      error
      data
      pagination
      view
    }
  }
`;
