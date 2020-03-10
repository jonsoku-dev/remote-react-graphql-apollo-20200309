// Query => GET
const resolver = {
  Query: {
    sayHello: (parent, { name }, context, info) => {
      if (!name) {
        return {
          success: false,
          error: "name값을 입력하지 않았습니다.",
          data: null
        };
      } else {
        return {
          success: true,
          error: null,
          data: `${name}님 안녕하세요. `
        };
      }
    }
  }
};

module.exports = resolver;
