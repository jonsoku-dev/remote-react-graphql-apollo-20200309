const Post = require("../../../models/Post");

const resolver = {
  Query: {
    getPostById: async (parent, { postId }, context, info) => {
      try {
        const post = await Post.findById({ _id: postId }).populate({
          path: "user",
          model: "User",
          select: "id name email"
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
