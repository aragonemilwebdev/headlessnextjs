import { gql } from "@apollo/client"

export const GET_HEROSECTION_DATA = gql`
query HeroSectionQuery {
  heroSection {
    edges {
      node {
        title
        heroSection {
          subTitle
          image {
            sourceUrl
          }
        }
      }
    }
  }
}
`