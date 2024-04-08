import Header from '../../components/Header';
import BlogsList from '../../components/BlogsList';

interface TBlogNode{
node: {
  id: string;
  slug: string;
  title: string;
  brief: string;
  coverImage: {
    url: string;
  };
  readTimeInMinutes: number;
  publishedAt: string; // ISO Date String
  updatedAt: string | null
}
}

async function getBlogs() {
  // TODO: query tags as well
  // tags{
  //  name
  // }

  const query = `
  {
    publication(host: "rdaahal.hashnode.dev") {
      isTeam
      title
      posts(first: 10) {
        edges {
          node {
            id
            slug
            title
            brief
            coverImage{
              url
            }
            readTimeInMinutes
            publishedAt
          }
        }
      }
    }
  }
  `

  try {
    const res = await fetch('https://gql.hashnode.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: {},
      }),
      cache: 'no-store',
    });
    const { data } = await res.json();

    return data.publication.posts.edges as TBlogNode[];
  } catch (e) {
    console.log(e);
    return [];
  }
}

export default async function Blogs() {
  const blogsList = await getBlogs();

  return (
    <>
      <Header activeNav="blogs" />
      <BlogsList blogsList={blogsList} />
    </>
  );
}
