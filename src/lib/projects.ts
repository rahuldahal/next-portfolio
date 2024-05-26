import { graphql } from "@octokit/graphql";
import { PinnedRepositoriesResponse, Repository } from "../types/githubGql";

const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: `token ${process.env.GITHUB_TOKEN}`,
  },
});

export async function fetchPinnedRepositories(): Promise<Repository[]> {
  const query = `
    query {
      viewer {
        pinnedItems(first: 10, types: REPOSITORY) {
          nodes {
            ... on Repository {
              id
              name
              description
              url
              primaryLanguage {
                name
              }
              repositoryTopics(first: 5) {
                nodes {
                  topic {
                    name
                  }
                }
              }
              homepageUrl
            }
          }
        }
      }
    }
  `;

  try {
    const response = await graphqlWithAuth<PinnedRepositoriesResponse>(query);
    const repositories = response.viewer.pinnedItems.nodes;

    return repositories;
  } catch (error) {
    console.error("Error fetching pinned repositories: ", error);
    return [];
  }
};
