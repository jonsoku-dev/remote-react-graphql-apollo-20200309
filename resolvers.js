const User = require("./models/User");

exports.resolvers = {
  // GET
  Query: {
    sayHello: (parent, args, context, info) => {
      const result = {
        success: true,
        error: null,
        data: ["안녕하세요", "graphql입니다", "아하하하하"],
        pagination: 1,
        view: 20
      };
      return result;
    }
  },

  // POST, DELETE, PATCH, PUT
  Mutation: {
    signUp: async (parent, { name, email, password }, context, info) => {
      try {
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
          return {
            success: false,
            data: null,
            error: "이메일이 중복되었습니다."
          };
        }
        const user = await User.create({
          name: name,
          email: email,
          password: password
        });
        return {
          success: true,
          data: user,
          error: null
        };
      } catch (error) {
        return {
          success: false,
          data: null,
          error: error.message
        };
      }
    }
  }
};
