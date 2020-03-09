exports.resolvers = {
  Query: {
    sayHello: () => {
      const result = {
        success: true,
        error: null,
        data: ["안녕하세요", "graphql입니다", "아하하하하"],
        pagination: 1,
        view: 20
      };
      return result;
    }
  }
};
