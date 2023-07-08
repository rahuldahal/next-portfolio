import Header from '../../../components/Header';
import Article from '../../../components/Article';

export async function getArticle(slug: string) {
  const query = `
      {
          post(slug:"${slug}", hostname: "rdaahal.hashnode.dev"){
            _id
            cuid
            title
            slug
            type
            dateUpdated
            dateAdded
            isFeatured
            contentMarkdown
            brief
            coverImage
            tags{
              name
              logo
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
    });
    const { data } = await res.json();
    if (!data) {
      return {};
    }
    return data.post;
  } catch (error) {
    console.log(error);
  }
}

export default async function BlogPage({ params: { slug } }) {
  const article = await getArticle(slug);
  return (
    <>
      <Header activeNav="blogs" />
      <Article article={article} />
    </>
  );
}
