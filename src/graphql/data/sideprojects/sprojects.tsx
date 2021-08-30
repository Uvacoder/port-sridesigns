import { gql } from 'graphql-request'
import { graphQLClient } from '../../services/graphcms'

export async function GetSideProjects() {
  const query = gql`
  {
    sideProjects{
      id
      title
      slug
      publishedAt
      summary
      coverImage{
        url
        width
        height
      }
    }
  }
  `
  return await graphQLClient.request(query);
}