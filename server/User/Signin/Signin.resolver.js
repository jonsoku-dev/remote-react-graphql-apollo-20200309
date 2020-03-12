const User = require("../../../models/User");
const bcrypt = require("bcrypt");
const createJWT = require("../../../utils/createJWT");

const resolver = {
  Mutation: {
    signin: async (parent, args, context, info) => {
      try {
        const { email, password } = args;
        const existingUser = await User.findOne({ email: email });

        if (!existingUser) {
          return {
            success: false,
            error: "유저 이메일이 존재하지 않습니다. ",
            data: null
          };
        }
        const isCorrect = await bcrypt.compare(password, existingUser.password);

        if (!isCorrect) {
          return {
            success: false,
            error: "유저 패스워드가 일치하지 않습니다. ",
            data: null
          };
        }
        const token = await createJWT(existingUser);
        return {
          success: true,
          error: null,
          data: token
        };
      } catch (error) {
        return {
          success: false,
          error: error.message,
          data: null
        };
      }
    }
  }
};

module.exports = resolver;
