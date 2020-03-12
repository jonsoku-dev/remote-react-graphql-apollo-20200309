import React from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { LOG_OUT_USER_LOCAL } from "../../shared.local";
import { toast } from "react-toastify";

const Header = ({ isLoggedIn }) => {
  const [logoutLocalFn] = useMutation(LOG_OUT_USER_LOCAL, {
    onCompleted() {
      toast.info("로그아웃되었습니다.");
    }
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxSizing: "border-box",
        padding: "0 16px"
      }}
    >
      <div
        style={{
          width: "200px",
          height: "auto"
        }}
      >
        <img
          src="https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG21.png"
          alt="logo"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "fill"
          }}
        />
      </div>
      <div
        style={{
          display: "flex"
        }}
      >
        {isLoggedIn ? (
          <>
            <Link style={LinkStyle} to="/mypage">
              MY PAGE
            </Link>
            <Link style={LinkStyle} to="!#" onClick={logoutLocalFn}>
              LOGOUT
            </Link>
          </>
        ) : (
          <>
            <Link style={LinkStyle} to="/">
              HOME
            </Link>
            <Link style={LinkStyle} to="/signin">
              SIGN IN
            </Link>
            <Link style={LinkStyle} to="/signup">
              SIGN UP
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

const LinkStyle = {
  display: "block",
  margin: "0 10px",
  textDecoration: "none",
  color: "inherit",
  fontSize: "14px",
  fontWeight: "900"
};

export default Header;
