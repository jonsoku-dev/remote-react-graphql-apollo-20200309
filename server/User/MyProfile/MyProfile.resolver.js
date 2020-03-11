const User = require("../../../models/User");

const resolver = {
  Query: {
    myProfile: async (parent, args, { userId }, info) => {
      try {
        const user = await User.findById({ _id: userId });
        console.log(user);
        if (!user) {
          return {
            success: false,
            error: "토큰이 존재하지않습니다. ",
            data: null
          };
        } else {
          return {
            success: true,
            error: null,
            data: user
          };
        }
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
