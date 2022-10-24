const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        savedBooks: [Book]
    }

    type Book {
        _id: ID
        authors: String
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        savedBooks: [Book]
        book (_id: ID!): Book
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addBook(bookId: ID!): User
    }

    type Auth {
        token: ID!
        user: User
    }
`;

module.exports = typeDefs;