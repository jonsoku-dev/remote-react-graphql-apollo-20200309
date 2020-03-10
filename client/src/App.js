import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { SIGN_UP_USER } from "./queries";

const App = () => {
  const initialState = {
    name: "",
    email: "",
    password: ""
  };

  const [signupFn, { data: signupResponseData }] = useMutation(SIGN_UP_USER);

  const [formData, setFormData] = useState(initialState);

  const [isForm, setIsForm] = useState(false);

  const { name, email, password } = formData;

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
      await signupFn({
        variables: {
          name: name,
          email: email,
          password: password
        }
      });
      setFormData(initialState);
      setIsForm(true);
    } catch (error) {
      alert(error);
    }
  };

  if (!isForm) {
    return (
      <form
        onSubmit={handleSubmit}
        style={{ width: "100%", boxSizing: "border-box", padding: "40px 60px" }}
      >
        <input
          onChange={handleChange}
          type="text"
          style={inputStyle}
          value={name}
          name={"name"}
          placeholder={"NAME"}
        />
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
        <button style={buttonStyle}>회원가입</button>
      </form>
    );
  } else {
    const { signup: { data: { name = null } = {} } = {} } = signupResponseData;
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20px",
          fontWeight: "900"
        }}
      >
        {name}님 환영합니다.
      </div>
    );
  }
};

const inputStyle = {
  width: "100%",
  marginBottom: "10px",
  height: "30px",
  padding: "10px",
  fontSize: "14px",
  fontWeight: "900"
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

export default App;
