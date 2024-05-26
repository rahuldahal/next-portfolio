export interface Language {
  name: string;
}

export interface Repository {
  id: string;
  name: string;
  description: string;
  url: string;
  primaryLanguage: Language | null;
  topics: { nodes: { topic: { name: string } }[] };
  homepageUrl: string | null;
}

export interface PinnedRepositoriesResponse {
  viewer: {
    pinnedItems: {
      nodes: Repository[];
    };
  };
}
