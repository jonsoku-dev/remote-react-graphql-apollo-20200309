import React from "react";
import PostItem from "../../../components/Post/PostItem";
import styled from "styled-components";
import mediaQuery from "../../../style/mediaQuery";

const Container = styled.div`
  width: 100%;
  margin: 80px 0;
  ${mediaQuery(2)} {
    width: 1000px;
    margin: 80px auto;
  }
  box-sizing: border-box;
  padding: 0 16px;
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
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 32px;
  ${mediaQuery(2)} {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 32px;
    width: 1000px;
    margin: 80px auto;
  }
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
