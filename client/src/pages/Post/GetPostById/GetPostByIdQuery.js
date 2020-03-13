import { gql } from "apollo-boost";

export const GET_POST_BY_ID = gql`
  query GetPostById($postId: ID!) {
    getPostById(postId: $postId) {
      success
      error
      data {
        id
        title
        description
        imgUrl
        user {
          id
          name
          email
        }
      }
    }
  }
`;

export const DELETE_POST_BY_ID = gql`
  mutation DeletePostById($postId: ID!) {
    deletePostById(postId: $postId) {
      success
      error
    }
  }
`;
