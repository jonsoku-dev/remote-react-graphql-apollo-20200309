const jwt = require("jsonwebtoken");

const createJWT = ({ _id }) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, {
    expiresIn: "1h"
  });
};

module.exports = createJWT;
