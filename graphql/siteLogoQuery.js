import { gql } from "@apollo/client";

export const GET_SITE_LOGO_QUERY = gql`
query SiteLogoDataQuery {
  siteLogo {
      sourceUrl
    }
  }
`