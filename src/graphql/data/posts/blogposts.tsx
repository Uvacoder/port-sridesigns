import { gql } from 'graphql-request'
import { graphQLClient } from '../../services/graphcms'

export async function GetCaseStudies() {
  const query = gql`
  {
    blogPosts (orderBy: publishedAt_DESC) {
      id
      title
      slug
      excerpt
      publishedAt
      coverImage {
        width
        height
        url
      }
    }
  }
  `
  return await graphQLClient.request(query);
}