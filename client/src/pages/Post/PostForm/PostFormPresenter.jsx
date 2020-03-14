import React from "react";
import styled from "styled-components";
import mediaQuery from "../../../style/mediaQuery";

const Container = styled.div`
  width: 100%;
  margin: 80px 0;
  ${mediaQuery(2)} {
    width: 1000px;
    margin: 80px auto;
  }
`;

const Form = styled.form`
  width: 300px;
  margin: 0 auto;
  * {
    outline: none;
    box-sizing: border-box;
  }
`;

const Input = styled.input`
  width: 300px;
  border: 1px solid #111111;
  padding: 16px;
  margin: 16px 0;
  font-size: 16px;
  font-weight: 900;
`;

const TextArea = styled.textarea`
  width: 300px;
  height: 200px;
  border: 1px solid #111111;
  padding: 16px;
  margin: 16px 0;
  font-size: 18px;
  font-weight: 900;
`;

const ButtonBox = styled.div`
  margin: 32px 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const DefaultButton = styled.div`
  cursor: pointer;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 16px 24px;
  font-weight: 900;
  box-shadow: 10px 10px 15px -9px rgba(0, 0, 0, 0.43);
  background-color: #34495e;
  color: #ffffff;
  transition: all 0.2s ease;
  margin: 0 16px;
  &:hover {
    background-color: #182223;
  }
`;

const WriteButton = styled.button`
  cursor: pointer;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 16px 24px;
  font-weight: 900;
  box-shadow: 10px 10px 15px -9px rgba(0, 0, 0, 0.43);
  color: #ffffff;
  margin: 0 16px;
  background-color: #3498db;
  &:hover {
    background-color: #2980b9;
  }
`;

const PostFormPresenter = ({
  handleChange,
  handleSubmit,
  handleGoBack,
  formData: { title, description, imgUrl },
  isUpdate
}) => {
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={title}
          name={"title"}
          onChange={handleChange}
          placeholder={"TITLE"}
        />
        <TextArea
          value={description}
          name={"description"}
          onChange={handleChange}
          placeholder={"DESCRIPTION"}
        />
        <Input
          type="text"
          value={imgUrl}
          name={"imgUrl"}
          onChange={handleChange}
          placeholder={"IMAGE URL"}
        />
        <ButtonBox>
          <DefaultButton onClick={handleGoBack}>뒤로가기</DefaultButton>
          <WriteButton type="submit">
            {isUpdate ? "UPDATE" : "WRITE"}
          </WriteButton>
        </ButtonBox>
      </Form>
    </Container>
  );
};

export default PostFormPresenter;
