import React from "react";
import styled from "styled-components";
import mediaQuery from "../../style/mediaQuery";

const Container = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${props => props.imgUrl && props.imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding-bottom: 32px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 10px 10px 15px -9px rgba(0, 0, 0, 0.43);
  transition: all 1s ease;
  position: relative;
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
  }
  &:first-of-type {
    ${mediaQuery(2)} {
      grid-column: 1 / -1;
      background-size: fill;
      height: 600px;
    }
  }
`;

const DataBox = styled.div`
  width: 100%;
  padding: 32px 0;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    180deg,
    rgba(236, 240, 241, 0.1) 0%,
    rgba(44, 62, 80, 0.51) 35%
  );
  color: white;
  > div {
    margin: 8px 0;
  }
`;

const Title = styled.div`
  font-weight: 900;
  font-size: 22px;
`;

const Author = styled.div`
  font-weight: 600;
  font-size: 12px;
  margin: 2px 0;
`;
const Description = styled.div`
  font-weight: 600;
  font-size: 16px;
`;

const CreatedAt = styled.div`
  font-weight: 600;
  font-size: 10px;
  margin: 2px 0;
`;

const PostItem = ({
  history,
  id,
  title,
  description,
  imgUrl = "https://b-rise.jp/wp-content/themes/b-rise/images/sample_img.gif",
  user: { name },
  createdAt
}) => {
  return (
    <Container imgUrl={imgUrl} onClick={() => history.push(`/post/${id}`)}>
      <DataBox>
        <Title>{title}</Title>
        <Author>{name}</Author>
        <Description>{description}</Description>
        {/** todo */}
        <CreatedAt>{createdAt}</CreatedAt>
      </DataBox>
    </Container>
  );
};

export default PostItem;
