const Post = require("../../../database/models/Post");

const resolver = {
  Mutation: {
    createPost: async (parent, { input }, { currentUserId }, info) => {
      try {
        const post = await Post.create({
          ...input,
          user: currentUserId
        });

        return {
          success: true,
          error: null,
          data: post
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
