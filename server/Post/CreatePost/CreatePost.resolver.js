const Post = require("../../../database/models/Post");

const resolver = {
  Mutation: {
    createPost: async (parent, { input }, { currentUserId }, info) => {
      if (!input.imgUrl) {
        input.imgUrl =
          "https://b-rise.jp/wp-content/themes/b-rise/images/sample_img.gif";
      }
      try {
        const post = await Post.create({
          ...input,
          user: currentUserId
        });

        console.log(post);

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
