exports.typeDefs = `
    type sayHelloResponse {
        success: Boolean!
        error: String,
        data: [String],
        pagination: Int,
        view: Float
    }

    type Query {
        sayHello: sayHelloResponse!
    }
`;
