import { gql } from "@apollo/client";

export const GET_CLIENTLOGOS_DATA = gql`
query ClientLogosQuery {
  clientLogos {
    edges {
      node {
        clientLogos {
          logo {
            sourceUrl
          }
        }
      }
    }
  }
}
  
`