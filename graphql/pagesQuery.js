import { gql } from "@apollo/client";

export const GET_PAGES_DATA = gqp`
query NewQuery {
    pages {
      edges {
        node {
          title
          slug
          pages {
            bannerImage {
              sourceUrl
            }
            subTitle
            content
          }
        }
      }
    }
  }
`