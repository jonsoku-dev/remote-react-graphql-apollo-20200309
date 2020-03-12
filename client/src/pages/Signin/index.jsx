import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { SIGN_IN_USER } from "./SigninQuery";
import { SIGN_IN_USER_LOCAL } from "../../shared.local";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";

const Signin = props => {
  const initialState = {
    email: "",
    password: ""
  };

  const [signinLocalFn] = useMutation(SIGN_IN_USER_LOCAL);

  const [signinFn] = useMutation(SIGN_IN_USER, {
    onCompleted({ signin }) {
      // 로그인 실패
      if (!signin.success) {
        toast.error(signin.error);
        return;
      }
      // 로그인 성공
      else {
        toast.success("로그인 성공");
        const token = signin.data;
        signinLocalFn({
          variables: {
            token: token
          }
        });
        props.history.push("/");
        return;
      }
    }
  });
  const [formData, setFormData] = useState(initialState);
  const { email, password } = formData;

  const handleChange = event => {
    const {
      target: { name, value }
    } = event;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async event => {
    try {
      event.preventDefault();
      await signinFn({
        variables: {
          email: email,
          password: password
        }
      });
      setFormData(initialState);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>로그인</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          boxSizing: "border-box",
          padding: "40px 60px"
        }}
      >
        <input
          onChange={handleChange}
          type="text"
          style={inputStyle}
          value={email}
          name={"email"}
          placeholder={"EMAIL"}
        />
        <input
          onChange={handleChange}
          type="password"
          style={inputStyle}
          value={password}
          name={"password"}
          placeholder={"PASSWORD"}
        />
        <button style={buttonStyle}>로그인</button>
      </form>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  marginBottom: "10px",
  height: "30px",
  padding: "32px",
  fontSize: "14px",
  fontWeight: "900",
  boxSizing: "border-box"
};

const buttonStyle = {
  width: "100%",
  boxSizing: "border-box",
  padding: "20px",
  backgroundColor: "black",
  color: "white",
  fontSize: "16px",
  fontWeight: "900"
};

export default withRouter(Signin);
