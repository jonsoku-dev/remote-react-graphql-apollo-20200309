const jwt = require("jsonwebtoken");

const createJWT = user => {
  const { _id } = user;
  return jwt.sign({ _id }, process.env.JWT_SECRET, {
    expiresIn: "1h"
  });
};

module.exports = createJWT;
