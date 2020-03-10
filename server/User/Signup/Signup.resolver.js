const User = require("../../../models/User");
const resolver = {
  Mutation: {
    signup: async (parent, { name, email, password }, context, info) => {
      console.log(name, email, password);
      try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return {
            success: false,
            error: "해당 이메일이 존재합니다.",
            data: null
          };
        }
        const newUser = await User.create({
          name: name,
          email: email,
          password: password
        });
        return {
          success: true,
          error: null,
          data: newUser
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
