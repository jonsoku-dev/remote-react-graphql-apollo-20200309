import React from "react";
import GetPostByIdPresenter from "./GetPostByIdPresenter";
import { GET_POSTS } from "../GetPosts/GetPostsQuery";
import { GET_POST_BY_ID, DELETE_POST_BY_ID } from "./GetPostByIdQuery";
import { GET_ME } from "../../../sharedQuery";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";

const GetPostByIdContainer = ({
  match: {
    params: { postId }
  },
  history
}) => {
  const { data, loading, error } = useQuery(GET_POST_BY_ID, {
    variables: {
      postId
    }
  });

  const { data: userData } = useQuery(GET_ME);

  const [deletePostByIdFn] = useMutation(DELETE_POST_BY_ID, {
    onCompleted({ deletePostById }) {
      const { success, error } = deletePostById;
      if (error) {
        toast.error(error.message);
      } else if (success) {
        toast.info("정상적으로 포스트가 삭제되었습니다. ");
      }
    },
    refetchQueries: [{ query: GET_POSTS }]
  });

  const handleGoBack = () => {
    history.goBack();
  };

  const handleUpdate = id => {
    history.push(`/post/${id}/update`);
  };

  const handleDelete = id => {
    if (window.confirm(`${id}번 포스트를 삭제하시겠습니까? `)) {
      deletePostByIdFn({
        variables: {
          postId: id
        }
      });
      history.push("/post");
    }
  };

  if (error) return <></>;
  if (loading) return <></>;

  const post = data.getPostById.data;
  const currentUser = userData.getMe.data;
  return (
    <div>
      <GetPostByIdPresenter
        handleGoBack={handleGoBack}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
        currentUser={currentUser}
        {...post}
      />
    </div>
  );
};

export default withRouter(GetPostByIdContainer);
