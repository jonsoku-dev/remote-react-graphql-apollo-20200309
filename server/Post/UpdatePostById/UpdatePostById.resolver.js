const Post = require("../../../models/Post");

const resolver = {
  Mutation: {
    updatePostById: async (
      parent,
      { input, postId },
      { currentUserId },
      info
    ) => {
      try {
        const post = await Post.findByIdAndUpdate(
          {
            _id: postId
          },
          {
            ...input
          },
          {
            new: true
          }
        ).populate({
          path: "user",
          model: "User",
          select: "id name"
        });
        if (currentUserId !== post.user.toString()) {
          return {
            success: false,
            error: "권한이 없습니다. ",
            data: null
          };
        }
        return {
          success: true,
          error: null,
          data: updatedPost
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
