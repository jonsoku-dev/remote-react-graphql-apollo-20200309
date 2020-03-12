import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        boxSizing: "border-box",
        width: "100%",
        height: "inherit",
        backgroundColor: "#3B3B3B",
        padding: "32px 0"
      }}
    >
      <div
        style={{
          width: "80%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: "16px"
        }}
      >
        <p style={ListStyle}>도움말</p>
        <p style={ListStyle}>이용약관</p>
        <p style={ListStyle}>개인정보 처리방침</p>
        <p style={ListStyle}>TS Social Plugins</p>
        <p style={ListStyle}>TS Creators Market</p>
        <p style={ListStyle}>TS 로고 사용 가이드</p>
        <p style={ListStyle}>TS Partners</p>
        <p style={ListStyle}>TS 블로그</p>
        <p style={ListStyle}>오시는길</p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <p
          style={{
            color: "white",
            fontSize: "16px"
          }}
        >
          © <strong>Remote Tamastudy</strong>
        </p>
      </div>
    </div>
  );
};

const ListStyle = {
  position: "relative",
  margin: "0 10px",
  color: "white",
  lineHeight: "20px"
};

export default Footer;
