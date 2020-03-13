import { gql } from "apollo-boost";

export const CRETE_POST = gql`
  mutation($title: String!, $description: String!, $imgUrl: String) {
    createPost(
      input: { title: $title, description: $description, imgUrl: $imgUrl }
    ) {
      success
      error
      data {
        id
        title
        description
        imgUrl
        createdAt
        updatedAt
      }
    }
  }
`;

export const UPDATE_POST_BY_ID = gql`
  mutation(
    $title: String
    $description: String
    $imgUrl: String
    $postId: ID!
  ) {
    updatePostById(
      input: { title: $title, description: $description, imgUrl: $imgUrl }
      postId: $postId
    ) {
      success
      error
      data {
        id
        title
        description
        imgUrl
        createdAt
        updatedAt
      }
    }
  }
`;
