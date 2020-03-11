const User = require("../../../models/User");
const comparePassword = require("../../../utils/comparePassword");
const createJWT = require("../../../utils/createJWT");

const resolver = {
  Mutation: {
    signin: async (parent, { email, password }, context, info) => {
      try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
          return {
            success: false,
            error: "유저정보가 존재하지않습니다. ",
            token: null
          };
        }
        const isCorrect = await comparePassword(existingUser, password);
        if (!isCorrect) {
          return {
            success: false,
            error: "비밀번호가 일치하지않습니다. ",
            token: null
          };
        }
        const token = await createJWT(existingUser);
        return {
          success: true,
          error: null,
          token: token
        };
      } catch (error) {
        return {
          success: false,
          error: error.message,
          token: null
        };
      }
    }
  }
};

module.exports = resolver;
