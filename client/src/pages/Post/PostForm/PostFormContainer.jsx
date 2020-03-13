import React, { useState } from "react";
import CreatePostPresenter from "./PostFormPresenter";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { CRETE_POST, UPDATE_POST_BY_ID } from "./PostFormQuery";
import { GET_POSTS } from "../GetPosts/GetPostsQuery";
import { GET_POST_BY_ID } from "../GetPostById/GetPostByIdQuery";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";

const PostFormContainer = ({ history, match }) => {
  const initialState = {
    title: "",
    description: "",
    imgUrl: ""
  };
  const [formData, setFormData] = useState(initialState);

  const { loading, error } = useQuery(GET_POST_BY_ID, {
    skip: match.params.postId ? false : true,
    variables: {
      postId: match.params.postId
    },
    onCompleted({ getPostById }) {
      const { success, error, data } = getPostById;
      if (error) {
        toast.error(error.message);
      } else if (success) {
        setFormData({
          ...formData,
          title: data.title,
          description: data.description,
          imgUrl: data.imgUrl
        });
      }
    }
  });

  const [createPostFn] = useMutation(CRETE_POST, {
    variables: {
      title: formData.title,
      description: formData.description,
      imgUrl: formData.imgUrl.length === 0 ? null : formData.imgUrl
    },
    onCompleted({ createPost: { success, error, data } }) {
      if (error) {
        toast.error(error);
      } else if (success) {
        toast.info("포스트가 작성되었습니다. ");
        history.push("/post");
      }
    },
    refetchQueries: [{ query: GET_POSTS }]
  });

  const [updatePostByIdFn] = useMutation(UPDATE_POST_BY_ID, {
    variables: {
      title: formData.title,
      description: formData.description,
      imgUrl: formData.imgUrl.length === 0 ? null : formData.imgUrl,
      postId: match.params.postId
    },
    onCompleted({ updatePostById: { success, error, data } }) {
      if (error) {
        toast.error(error);
      } else if (success) {
        toast.info("포스트가 수정되었습니다. ");
        history.push(`/post/${match.params.postId}`);
      }
    },
    refetchQueries: [
      { query: GET_POST_BY_ID, variables: { postId: match.params.postId } }
    ]
  });

  const handleChange = event => {
    const {
      target: { name, value }
    } = event;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(match.params.postId);
    if (match.params.postId) {
      updatePostByIdFn();
    } else {
      createPostFn();
    }
  };

  const handleGoBack = event => {
    event.preventDefault();
    history.push("/post");
  };

  if (error) return <></>;
  if (loading) return <></>;

  return (
    <div>
      <CreatePostPresenter
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleGoBack={handleGoBack}
        formData={formData}
        isUpdate={match.params.postId}
      />
    </div>
  );
};

export default withRouter(PostFormContainer);
