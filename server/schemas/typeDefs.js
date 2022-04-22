const { gql } = require('apollo-server-express');

const typeDefs = gql`
"""
// User type:
// _id
// username
// email
// bookCount
// savedBooks (This will be an array of the Book type.)
"""
  type User {
    _id: ID
    username: String
    email: String
    bookCount: String
   saveBooks: [Book]
  
  }

  type Book {
    """
    / Book type:
// bookId (Not the _id, but the book's id value returned from Google's Book API.)
// authors (An array of strings, as there may be more than one author.)
// description
// title
// image
// link
"""
    bookId: ID 
    authors:[String]
    description: String
    title: String
    image: String
    link: String
  }

  input BookInput {
    """
    / inputBook :
// bookId (Not the _id, but the book's id value returned from Google's Book API.)
// authors (An array of strings, as there may be more than one author.)
// description
// title
// image
// link
"""
    bookId: String
    authors:[String]
    description: String
    title: String
    image: String
    link: String
  }
  type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }
"""

// Auth type:
// token
// user (References the User type.)
"""
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    """
     me: Which returns a User type.
    """
    me: User
  }

  type Mutation {

    """
    login: Accepts an email and password as parameters; returns an Auth type.
    """
    login(email: String!, password: String!): Auth
    """
    addUser: Accepts a username, email, and password as parameters; returns an Auth type.
    """
    addUser(username: String!, email: String!, password: String!): Auth
    """
    // saveBook: Accepts a book author's array, description, title, bookId, image, and link as parameters; returns a User type. (Look into creating what's known as an input type to handle all of these parameters!)
    """
    saveBooks(bookInfo: BookInput): User
    """
    // removeBook: Accepts a book's bookId as a parameter; returns a User type.
    """
    removeBook(bookID: ID): User
  }
`;

module.exports = typeDefs;












