import { gql } from "@apollo/client";

export const GET_CONTACTUS_DATA = gql`
query ExampleQuery {
    contactUs {
      data {
        attributes {
          Link
        }
      }
    }
  }
  
`