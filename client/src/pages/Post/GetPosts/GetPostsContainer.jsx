import React from "react";
import GetPostsPresenter from "./GetPostsPresenter";
import { useQuery } from "@apollo/react-hooks";
import { GET_POSTS } from "./GetPostsQuery";
import { withRouter } from "react-router-dom";

const GetPostsContainer = ({ history, isLoggedIn }) => {
  const { data, loading, error } = useQuery(GET_POSTS);
  if (error) return <>error</>;
  if (loading) return <>loading...</>;
  const posts = data.getPosts.data;
  console.log(isLoggedIn);
  console.log(posts);
  return (
    <div>
      <GetPostsPresenter
        posts={posts}
        history={history}
        isLoggedIn={isLoggedIn}
      />
    </div>
  );
};

export default withRouter(GetPostsContainer);
