const bcrypt = require("bcrypt");

const comparePassword = ({ password }, InputPassword) => {
  const isCorrect = bcrypt.compare(InputPassword, password);
  return isCorrect;
};

module.exports = comparePassword;
