const User = require("../../../database/models/User");
const Post = require("../../../database/models/Post");

const resolver = {
  Mutation: {
    deletePostById: async (parent, { postId }, { currentUserId }, info) => {
      try {
        const post = await Post.findByIdAndDelete({ _id: postId });
        if (currentUserId !== post.user.toString()) {
          return {
            success: false,
            error: "권한이 없습니다. "
          };
        }
        if (!post) {
          return {
            success: false,
            error: "해당 포스트가 존재하지 않습니다. "
          };
        }
        return {
          success: true,
          error: null
        };
      } catch (error) {
        return {
          success: false,
          error: error.message
        };
      }
    }
  }
};

module.exports = resolver;
