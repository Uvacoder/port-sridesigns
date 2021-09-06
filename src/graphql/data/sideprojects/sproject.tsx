import { gql } from 'graphql-request'
import { graphQLClient } from '../../services/graphcms'

export async function GetSideProject(slug) {
  const query = gql`
  query SideProject($slug: String!) {
    sideProjects(where: {slug: $slug}) {
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
      activities
      duration
      techStack
    }
  }
  `
  const variables = {
    slug,
  }

  return await graphQLClient.request(query, variables);
}

export async function GetSideProjectSlug() {
  const query = gql`
  query {
    sideProjects {
      slug 
    }
  }
  `
  return await graphQLClient.request(query);
}