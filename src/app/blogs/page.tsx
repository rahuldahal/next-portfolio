import Header from '../../components/Header';
import BlogsList from '../../components/BlogsList';

async function getBlogs() {
  // TODO: query tags as well
  // tags{
  //  name
  // }
  const query = `
  {
    user(username: "rahuldahal") {
      publication {
        posts(page: 0) {
          _id
          slug
          title
          brief
          coverImage
          dateAdded
        }
      }
    }
  }
  `;

  try {
    const res = await fetch('https://api.hashnode.com', {
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
    return data.user.publication.posts as any[];
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
