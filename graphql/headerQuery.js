import { gql } from "@apollo/client"

export const GET_HEADER_DATA = gql`
query HeaderQuery {
  menus {
    data {
      attributes {
        Title
        Link
      }
      id
    }
  }
  }
  
`