exports.typeDefs = `
    type User {
        _id: ID
        name: String!
        email: String!
        password: String!
        joinDate: String
    }

    type sayHelloResponse {
        success: Boolean!
        error: String
        data: [String]
        pagination: Int
        view: Float
    }

    type Query {
        sayHello: sayHelloResponse!
    }

    type signUpResponse {
        success: Boolean!
        data: User
        error: String
    }

    type Mutation {
        signUp(name: String!, email: String!, password: String!): signUpResponse!
    }
`;
