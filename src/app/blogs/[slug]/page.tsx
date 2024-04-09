import Header from '../../../components/Header';
import Article from '../../../components/Article';
import {headers} from 'next/headers';
import Error400 from '../../../components/Error400';

async function getArticle(id: string) {
  const query = `
  {
    post(id: "${id}"){
      id
      title
      updatedAt
      publishedAt
      readTimeInMinutes
      content{
        markdown
      }
      brief
      coverImage{
        url
      }
      tags{
        name
        logo
      }
    }
  }
      `;

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
    
    if (!data) {
      return {};
    }

    return data.post;
  } catch (error) {
    console.log(error);
  }
}
interface SearchParams {
  searchParams: {
    id?: string | undefined;
  }
}

export default async function BlogPage({ searchParams }: SearchParams) {
  // Check if searchParams object or id parameter is missing
  if (!searchParams || !searchParams.id) {
    return <><Header activeNav="blogs" /><Error400 /></>;
  }

  const article = await getArticle(searchParams.id);

  return (
    <>
      <Header activeNav="blogs" />
      <Article article={article} />
    </>
  );
}

