const jwt = require("jsonwebtoken");
const User = require("../models/User");

const decodeJWT = async token => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { _id } = decoded;
    const user = await User.findById(_id);
    // return user;
    return _id;
  } catch (error) {
    console.error(`decodeJWT error: ${error.message}`);
    return undefined;
  }
};

module.exports = decodeJWT;
