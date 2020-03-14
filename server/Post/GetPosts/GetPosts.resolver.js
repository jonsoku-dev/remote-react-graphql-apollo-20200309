const Post = require("../../../database/models/Post");

const resolver = {
  Query: {
    getPosts: async (parent, args, context, info) => {
      try {
        const posts = await Post.find().populate({
          path: "user",
          model: "User",
          select: "id name email"
        });

        return {
          success: true,
          error: null,
          data: posts
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
