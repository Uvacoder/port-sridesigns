import { gql } from 'graphql-request'
import { graphQLClient } from '../../services/graphcms'

export async function GetAppExploration(slug) {
  const query = gql`
  query AppExploration($slug: String!) {
    appExplorations(where: {slug: $slug}) {
      id
      title
      slug
      summary
      publishedAt
      coverImage {
        url
        width
        height
      }
      body {
        json
        markdown
      }
    }
  }
  `
  const variables = {
    slug,
  }

  return await graphQLClient.request(query, variables);
}

export async function GetAppExplorationSlug() {
  const query = gql`
  query {
    appExplorations {
      slug 
    }
  }
  `
  return await graphQLClient.request(query);
}