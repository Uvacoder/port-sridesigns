import { gql } from 'graphql-request'
import { graphQLClient } from '../../services/graphcms'

export async function GetAppExplorations() {
  const query = gql`
  {
    appExplorations{
      id
      title
      slug
      publishedAt
      summary
    }
  }
  `
  return await graphQLClient.request(query);
}