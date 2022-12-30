import { gql } from "@apollo/client";

export const GET_PROJECTS_DATA = gql`
query ProjectsDataQuery {
  projects {
    edges {
      node {
        title
        projects {
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


export const GET_PROJECT_DATA_BY_SLUG = gql`
query NewQuery ($slug:String){
  projectBy(slug:$slug) {
    projects {
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