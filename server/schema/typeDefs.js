const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String

  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String): User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth 
    login(email: String!, password: String!):Auth
    updateUser(user_id: ID!, new_username: String!, new_email: String!, new_password: String!): User
  }
`;

module.exports = typeDefs;


// I added lines 25 (this is just to keep track in case I break it. :)