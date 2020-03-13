import React from "react";
import PostItem from "../../../components/Post/PostItem";
import styled from "styled-components";

const Container = styled.div`
  width: 1000px;
  margin: 80px auto;
`;

const ButtonBox = styled.div`
  margin: 32px 0;
  display: flex;
  justify-content: flex-end;
`;

const WriteButton = styled.div`
  cursor: pointer;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 16px 24px;
  font-weight: 900;
  box-shadow: 10px 10px 15px -9px rgba(0, 0, 0, 0.43);
  background-color: #34495e;
  color: #ffffff;
  transition: all 0.2s ease;
  &:hover {
    background-color: #182223;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
`;

const GetPostsPresenter = ({ posts, history }) => {
  return (
    <Container>
      <ButtonBox>
        <WriteButton
          onClick={() => {
            history.push("/post/create");
          }}
        >
          포스트작성
        </WriteButton>
      </ButtonBox>
      <GridContainer>
        {posts.map(post => (
          <PostItem key={post.id} history={history} {...post} />
        ))}
      </GridContainer>
    </Container>
  );
};

export default GetPostsPresenter;
