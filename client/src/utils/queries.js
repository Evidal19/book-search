import { gql } from '@apollo/client';

export const QUERY_GET_ME= gql`
  query me($username: String) {
   me {
      _id
      username
      email
      bookCount
      saveBooks{
        booId
        authors
        description
        title
        image
        link
      } 
    }
  }
`;
