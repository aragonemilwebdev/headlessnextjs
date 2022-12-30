import { gql } from "@apollo/client";

export const GET_SERVICES_DATA = gql`
query ServicesDataQuery {
  services {
    edges {
      node {
        title
        services {
          subTitle
          image {
            sourceUrl
          }
          content
        }
        slug
      }
    }
  }
}
`

export const GET_SERVICE_DATA_BY_SLUG = gql`
query NewQuery ($slug:String){
  serviceBy(slug:$slug) {
     services {
       content
       subTitle
       image {
         sourceUrl
       }
     }
     title
   }
 }
`
